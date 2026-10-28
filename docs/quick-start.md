# Quick Start

## 概述

StrawMoneyBook 是 npm monorepo：`frontend/` 為 Vue 3 + Capacitor App（本機 SQLite），`backend/` 為 Node.js 共同帳本與帳號 API。本頁說明 **最短時間** 在本機跑起前端 dev server；CI、Play 發版、Docker 部署見 [Operations 文件中心](/guide/)。

| 項目 | 說明 |
|------|------|
| 原始碼 | [StrawCoding/StrawMoneyBook](https://github.com/StrawCoding/StrawMoneyBook)（公開） |
| 授權 | [PolyForm Noncommercial 1.0.0](/operations/open-source-and-license) — 可研究與非商用散布，**禁止第三方商用** |
| 官方 API | 預設 `https://api.strawmb.com`（dev 可不啟本機 backend） |
| 完整索引 | [文件中心 /guide/](/guide/) |

## 01 · 需求

| 工具 | 版本 |
|------|------|
| Node.js | `^20.19.0 \|\| >=22.12.0` |
| npm | 隨 Node 附帶 |
| Git | 建議最新 stable |

Android 原生建置另需 JDK、Android SDK（見 [Android & Capacitor](/domains/android-capacitor)）。

## 02 · 專案結構

```text
StrawMoneyBook/
├── frontend/          # Vue 3 + Vite + Capacitor、Pinia、本機 SQLite
│   ├── src/ui/        # 畫面、元件、stores
│   ├── src/core/      # 與 UI 解耦的 services / utils
│   └── android/       # Capacitor Android 專案（銀行 WebView 原生碼）
├── backend/           # 共同帳本、帳號、OAuth exchange API
├── docs/              # 主 repo 內部文件與 docs/wiki 快照
├── docs/wiki/         # 與本 Wiki Operations 同步來源
└── scripts/           # 根目錄版本／檢查腳本
```

程式入口：

| 區塊 | 路徑 |
|------|------|
| 前端 bootstrap | `frontend/src/main.js` |
| 路由表 | `frontend/src/ui/router/index.js` |
| 後端 server | `backend/src/server.js` |

## 03 · 安裝

```bash
git clone https://github.com/StrawCoding/StrawMoneyBook.git
cd StrawMoneyBook
npm install
npm install --prefix frontend
npm install --prefix backend
```

## 04 · 環境變數（首次必做）

1. 複製範本：

```bash
cp frontend/.env.example frontend/.env.development.local
```

2. 編輯 `frontend/.env.development.local`，至少設定：

```bash
VITE_GOOGLE_WEB_CLIENT_ID=你的_Google_OAuth_Web_Client_ID
```

3. 其餘變數說明見 [Environment Variables](/operations/environment-variables)。  
4. **勿** commit `.env*`、keystore、Play SA JSON。

## 05 · 啟動前端（預設連正式 API）

```bash
npm run dev:frontend
```

- Vite dev server 啟動後依終端 URL 開瀏覽器（port 可能為 3000／5173 等，以輸出為準）。  
- 此模式 **不需要** 本機 backend，API 指向 `https://api.strawmb.com`。

## 06 · 可選：本機 backend

若要 debug 共同帳本 API：

1. 在 `frontend/.env.development.local` 增加／覆寫：

```bash
VITE_SHARED_LEDGER_API_BASE_URL=http://127.0.0.1:8787
```

2. 另開 terminal：

```bash
npm run dev:backend
```

3. 後端 env 範本：`backend/.env.example`（複製為 `backend/.env`）。

## 07 · 驗證

```bash
npm run test:frontend
npm run test:backend
npm run check
```

改動 UI 元件時，維護者另跑 [Playwright App Shell](/operations/playwright-app-shell) 腳本（見 Operations）。

## 08 · 常見問題

| 現象 | 方向 |
|------|------|
| Google 登入失敗 | 檢查 `VITE_GOOGLE_WEB_CLIENT_ID`、OAuth 同意畫面與 [Authentication](/guide/authentication) |
| 無法連 API | 確認是否誤設 `127.0.0.1:8787` 但 backend 未啟動 |
| `npm run check` 失敗 | 讀 CI 等價腳本輸出；i18n audit 缺 key 需補 messages |
| 銀行同步在瀏覽器無效 | 銀行自動化為 **Android 原生**；見 [Bank Sync](/domains/bank-sync-einvoice) |

更多：[Troubleshooting](/operations/troubleshooting)。

## 下一步

1. [文件中心](/guide/) — 全站模組地圖（推薦）  
2. [Architecture Overview](/architecture/overview) — 本機優先與雲端邊界  
3. [Application Layers](/architecture/application-layers) — `ui/` vs `core/`  
4. [Open Source & License](/operations/open-source-and-license) — fork 與商用邊界  
5. [Operations Home](/operations/) — 發版、部署 runbook
