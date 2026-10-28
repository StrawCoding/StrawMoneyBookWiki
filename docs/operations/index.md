---
title: Operations
---

# Home

這是 StrawMoneyBook **官方技術操作 Wiki**（發布於 [`StrawMoneyBookWiki`](https://strawcoding.github.io/StrawMoneyBookWiki/) VitePress 站；來源快照在主 repo `docs/wiki/`）。維護者依固定流程完成本機開發、測試、CI、發版、Android／Play、後端部署、備份還原、同步 runbook 與故障排查。

::: warning 連結格式
所有 Operations 頁面 canonical 路徑為 **`https://strawcoding.github.io/StrawMoneyBookWiki/operations/<slug>`**（VitePress **clean URL**，通常 **不要** 加 `.html`）。若省略 `/StrawMoneyBookWiki/` 前綴，請改用 org 根站轉址或上述完整 URL。
:::

產品能力圖另見 [`StrawMoneyBook_App_Features_Detailed.md`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/StrawMoneyBook_App_Features_Detailed.md) 與 [`frontend/StrawMoneyBook_Features_Map.md`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/frontend/StrawMoneyBook_Features_Map.md)。全產品優化 backlog：[Optimization-Plan](/operations/optimization-plan)。

## 快速導覽

### 開發與品質
- [Open Source & License](/operations/open-source-and-license)
- [Local-Dev-Quickstart](/operations/local-dev-quickstart)
- [Environment-Variables](/operations/environment-variables)
- [Testing-And-Verification](/operations/testing-and-verification)
- [Playwright-App-Shell](/operations/playwright-app-shell)
- [CI-CD-And-Gates](/operations/ci-cd-and-gates)

### 發版
- [Closeout-And-Versioning](/operations/closeout-and-versioning)
- [Long-Task-Worker](/operations/long-task-worker)
- [Release-Process](/operations/release-process)
- [Android-Release-And-Play-Upload](/operations/android-release-and-play-upload)
- [Android-Native-Bank-APK](/operations/android-native-bank-apk)

### 營運
- [Backend-Deployment-And-Health](/operations/backend-deployment-and-health)
- [Backups-And-Restore](/operations/backups-and-restore)
- [Auth-And-Security-Operations](/operations/auth-and-security-operations)

### 產品領域
- [Payroll-Cycle-Budget](/operations/payroll-cycle-budget)
- [Wear-Companion](/operations/wear-companion)
- [Sync-Operations-Runbooks](/operations/sync-operations-runbooks)
- [Sync-Architecture-B](/operations/sync-architecture-b)

### 事故
- [Troubleshooting](/operations/troubleshooting)
- [Optimization-Plan](/operations/optimization-plan)

## 引用來源（避免知識漂移）

- 專案說明：[`README.md`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/README.md)
- 發版閘門：[`docs/release-checklist.md`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/docs/release-checklist.md)
- 備份／還原：[`docs/backup-strategy.md`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/docs/backup-strategy.md)
- Google backend auth：[`docs/google-backend-auth.md`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/docs/google-backend-auth.md)
- CI：[`../../.github/workflows/ci.yml`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/.github/workflows/ci.yml)
