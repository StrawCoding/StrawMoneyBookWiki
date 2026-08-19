# Testing and Verification

## 最低驗收流程

每次改動至少完成：

1. Node tests
2. Web build
3.（若有 UI 改動）對應 Playwright suite

## 1) Node tests

```bash
npm run test:node --prefix frontend
```

## 2) Web build

```bash
npm run build:web --prefix frontend
```

## 3) Playwright（UI 改動必跑）

```bash
npm run playwright:ui-layout --prefix frontend
```

常見功能驗證：

```bash
npm run playwright:bank-sync --prefix frontend
npm run playwright:carrier-sync --prefix frontend
```

::: warning 不要只跑單一測試
如果你改到設定頁或流程型 UI，至少要跑一個 layout 類 suite + 一個功能類 suite，避免治標不治本。
:::

## 對齊 CI 的本機驗證

```bash
npm run check --prefix frontend
```

