# Quick Start

## 概述

StrawMoneyBook 是 npm monorepo：`frontend/` 為 Vue 3 + Capacitor App（本機 SQLite），`backend/` 為 Node.js 共同帳本與帳號 API。本頁只說明開發者如何快速進入程式碼，不含 CI、部署或維運流程。

## 需求

- Node.js `^20.19.0 || >=22.12.0`
- npm

## 專案結構

```text
StrawMoneyBook/
├── frontend/   # Vue + Vite + Capacitor + 本機 SQLite
├── backend/    # 共同帳本、帳號、邀請碼 API
├── docs/       # 主 repo 內部架構文件
└── scripts/    # 根目錄檢查腳本
```

## 安裝與啟動

```bash
git clone https://github.com/StrawCoding/StrawMoneyBook.git
cd StrawMoneyBook
npm install
npm install --prefix frontend
npm install --prefix backend
npm run dev:frontend
```

預設前端連正式營運 API `https://api.strawmb.com`，不必先啟動本機 backend。

若要改打本機 backend（`8787`），在 `frontend/.env.development.local` 覆寫：

```bash
VITE_SHARED_LEDGER_API_BASE_URL=http://127.0.0.1:8787
```

再執行 `npm run dev:backend`。

## 常用檢查

```bash
npm run test:frontend
npm run test:backend
npm run check
```

## 下一步

- [Architecture Overview](/architecture/overview) — 理解系統邊界
- [Application Layers](/architecture/application-layers) — 分層與依賴
- [Frontend Stack](/guide/frontend-stack) — Vue / Pinia / Store 職責

::: tip 原始碼入口
前端：`frontend/src/main.js`  
後端：`backend/src/server.js`  
路由表：`frontend/src/ui/router/index.js`
:::
