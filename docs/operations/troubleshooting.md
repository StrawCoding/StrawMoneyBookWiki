---
title: Troubleshooting
---

# Troubleshooting

## 症狀 → 原因 → 驗證 → 處理

### A) CI 擋在 `release:sync-check`

- 症狀：`frontend/package.json` version 與最新 `v*` tag 不一致
- 原因：人工改版本或沒走 `gpr`
- 驗證：`cd frontend && npm run release:sync-check`
- 處理：回到 [Closeout-And-Versioning](/operations/closeout-and-versioning) 用 `npm run gpr`

### B) 測試通過但 UI 不對

- 優先 `npm run playwright:ui-layout --prefix frontend`（必須進 BottomNav shell）
- 再跑功能 suite：`playwright:bank-sync` / `carrier-sync` / `budget-pay-cycle`

### C) Playwright 找不到 browsers

```bash
cd backend && npm run playwright:install-browsers
```

對齊 CI 的 `PLAYWRIGHT_BROWSERS_PATH`。

### D) Android SQLite / better-sqlite3 ABI

不要在 host install native。`backend && npm run deploy:copy` 後 **`docker restart StrawMB`**。[Backend-Deployment-And-Health](/operations/backend-deployment-and-health)

### E) 手機銀行同步仍是舊行為

Web／CI 綠 ≠ 原生已修。確認 APK versionName 後重裝。[Android-Native-Bank-APK](/operations/android-native-bank-apk)

### F) 載具「已設定」但一查就 401／503

`isEInvoiceApiConfigured()` 必須有 API base **且** client key，不能只因 PROD／native 就回 true。Health 200 ≠ 財政部登入成功。

### G) 共同帳本 CORS／cookie 冷啟動

Cookie 只負責 restore；`canUseApi` 需要 access token。對照 [`docs/google-backend-auth.md`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/docs/google-backend-auth.md)。

### H) Play 看不到更新

AAB 上傳成功只代表檔案到 Google。確認 `play-testing-channel.json` 軌道、測試者 opt-in、以及 `https://www.strawmb.com/app-update.json` 的 `latestVersion`。[Wear-Companion](/operations/wear-companion)

### I) 華南 `hua_nan_account_list_not_found`

H1 尚未用真實登入凍 DOM。[Sync-Architecture-B](/operations/sync-architecture-b)

## 引用

- [`./.github/workflows/ci.yml`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/.github/workflows/ci.yml)
- [`backend/scripts/deploy-production-install.mjs`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/backend/scripts/deploy-production-install.mjs)
