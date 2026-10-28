---
layout: home

hero:
  name: StrawMoneyBook
  text: Developer Guide
  tagline: 專案架構、模組協作與功能域技術文件
  actions:
    - theme: brand
      text: 文件中心
      link: /guide/
    - theme: alt
      text: Quick Start
      link: /quick-start
    - theme: alt
      text: Architecture
      link: /architecture/overview
    - theme: alt
      text: Operations
      link: /operations/

features:
  - title: 架構優先
    details: 從 monorepo 邊界、分層依賴到啟動鏈，理解 frontend / backend 如何分工與協作。
  - title: 功能域導覽
    details: 記帳、預算、資產、借貸報銷、同步備份等 9 大域，每章說明資料流與關鍵 Service / Store。
  - title: 對標 Vue 3 文件
    details: 概念 → 協作 → 程式入口，搭配 mermaid 圖與 GitHub 原始碼連結，而非維運 runbook。
---

## 建議閱讀路徑

1. [文件中心](/guide/) — 模組索引（入門／功能域／發版／架構）
2. [Quick Start](/quick-start) — 本機開發環境與 repo 結構
3. [Architecture Overview](/architecture/overview) — 系統邊界與技術棧
4. [Application Layers](/architecture/application-layers) — 分層與依賴方向
5. [Feature Domains](/domains/bookkeeping) — 依業務域深入
6. [Operations](/operations/) — closeout、Playwright、APK、發薪週期、銀行真機閘

::: tip 與產品文件的差異
本 wiki 分兩層：**Guide / Architecture / Domains** 講程式架構與模組協作；**Operations** 講發版、測試、部署與同步 runbook。產品能力詳述見主 repo 的 [`StrawMoneyBook_App_Features_Detailed.md`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/StrawMoneyBook_App_Features_Detailed.md)；檔案對照表見 [`StrawMoneyBook_Features_Map.md`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/frontend/StrawMoneyBook_Features_Map.md)。
:::
