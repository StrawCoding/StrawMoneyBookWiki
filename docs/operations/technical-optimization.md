---
title: Technical Optimization
---

# Technical Optimization

**版本：** 2026-08-28（對齊產品 **v1.4.6**）  
**性質：** 剩餘架構／效能／測試手法與驗收閘。只讀稽核，不是實作授權。  
**HTML 報告：** [主 repo 稽核 HTML](https://github.com/StrawCoding/StrawMoneyBook/blob/main/docs/audits/smb-tech-optimization-20260828/strawmb-tech-optimization.html)

全產品方案見 [Optimization Plan](/operations/optimization-plan)，不要把已落地項重開單。

## 已落地（不要重做）

分析主頁 `loadAnalysisStats` SQL `GROUP BY`、首頁 SQL 彙總＋分頁、staged hydration、路由 lazy import、Vite `manualChunks`、交易索引、後端 route-table、membership 不碰 router、首頁流／搜尋 `content-visibility`、禁新 `*-source.test.js`、Playwright 進 CI。

雙 layout（傳統 `apple-ui.css`／現代 `habitat-ui.css`）是產品決策，**禁止**當「清傳統 CSS」債。

## 剩餘（詳見 HTML）

| ID | 嚴重度 | 摘要 | 狀態 |
|---|---|---|---|
| T-01 | P0 | 分析分類明細 `all` 仍 `listAllTransactionsChunked` | **DONE** |
| T-02 | P0 | `main.js` FontAwesome 全量 `library.add` | **DONE**（`fa-icon-registry`） |
| T-03 | P1 | `core` 三處 `from '@/ui/…'` | OPEN |
| T-04 | P1 | `app-runtime.service.js` 633 行神檔 | OPEN |
| T-05 | P1 | `membership.service.js` 971 行 | OPEN |
| T-06 | P1 | 73 個 `*-source.test.js` 鎖重構 | OPEN |
| T-07 | P2 | 分類明細／請款列表尚未 content-visibility | OPEN |

銀行真機閘見 [Sync Architecture B](/operations/sync-architecture-b)。

## 導覽

- [Optimization Plan](/operations/optimization-plan)
- [Testing & Verification](/operations/testing-and-verification)
- [Operations Home](/operations/)
