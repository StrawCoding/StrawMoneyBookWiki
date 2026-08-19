# Troubleshooting

## 快速定位

先判斷是哪一類問題：

1. Build / 測試失敗
2. UI 渲染或路由問題
3. 部署後行為與本機不同

## A. `release:sync-check` 失敗

**症狀**：CI 指出版本與 tag 不一致。  
**處理**：

```bash
cd frontend
npm run release:sync-check
```

然後回到標準 release 流程，不要手動改 tag/version。

## B. UI 看起來正常，但 E2E 失敗

**先跑**：

```bash
npm run playwright:ui-layout --prefix frontend
```

再補功能測試（例如 bank/carrier sync）。

## C. 原生依賴或 runtime 行為不一致

若問題落在後端 native 相依（例如 sqlite binding），請優先依部署 runbook 檢查 container 內安裝流程，而非只重跑表面指令。

::: tip 排查順序
先重現 -> 確認分類 -> 跑最小驗證指令 -> 再改動。  
這樣可以避免一次改太多造成新回歸。
:::

