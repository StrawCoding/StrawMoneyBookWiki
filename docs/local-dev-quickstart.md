# Local Dev Quickstart

## 目的

讓維護者可快速完成本機開發與驗證循環：安裝、啟動、測試。

## 需求

- Node.js（建議與專案既有版本一致）
- npm

## 安裝

```bash
npm install
npm install --prefix frontend
npm install --prefix backend
```

## 啟動

前端（預設 API 設定依專案 env）：

```bash
npm run dev:frontend
```

後端：

```bash
npm run dev:backend
```

::: tip 本機開發建議
若只修改前端 UI，先跑前端 dev + 對應測試，可縮短回饋迴圈。
:::

## 常用檢查

```bash
npm run test:node --prefix frontend
npm run build:web --prefix frontend
```

## 常見問題

### 啟動成功但 API 行為不對

- 先檢查前端本機環境變數是否覆寫了 API base URL。
- 再檢查後端是否啟動在預期埠。

### 測試過但 build 失敗

- 優先檢查路由/匯入路徑、環境變數使用與動態 import。

