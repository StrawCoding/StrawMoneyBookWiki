---
title: 文件中心
---

# ARCHITECTURE & DOCUMENTATION

StrawMoneyBook 開發者手冊：monorepo 架構、本機 SQLite 與 Capacitor 執行期、共同帳本 API、Google／WebDAV 同步、Android 原生銀行 WebView、發版與 **PolyForm 非商用開源** 授權邊界。

<div class="doc-topics">
  <a class="doc-topic" href="/operations/open-source-and-license">開源授權</a>
  <a class="doc-topic" href="/quick-start">安裝入門</a>
  <a class="doc-topic" href="/operations/local-dev-quickstart">本機開發</a>
  <a class="doc-topic" href="/domains/sync-backup-shared-ledger">同步備份</a>
  <a class="doc-topic" href="/domains/bank-sync-einvoice">銀行載具</a>
  <a class="doc-topic" href="/operations/android-release-and-play-upload">Play 發版</a>
  <a class="doc-topic" href="/architecture/application-layers">分層架構</a>
  <a class="doc-topic" href="/operations/troubleshooting">故障排查</a>
</div>

## 01 · 入門、開源與環境

<div class="doc-grid">

<a class="doc-card" href="/operations/open-source-and-license">
<span class="doc-meta"><span class="doc-id">01.1</span><span class="doc-tag tag-critical">LICENSE</span></span>
<strong>Open Source &amp; License</strong>
<p>PolyForm Noncommercial：公開原始碼、禁止第三方商用；fork 義務、官方 Play 與社群自建邊界。</p>
</a>

<a class="doc-card" href="/quick-start">
<span class="doc-meta"><span class="doc-id">01.2</span><span class="doc-tag tag-start">START</span></span>
<strong>Quick Start</strong>
<p>Clone、npm 安裝、預設連 <code>api.strawmb.com</code> 的前端 dev；本機 backend 8787 覆寫方式。</p>
</a>

<a class="doc-card" href="/operations/local-dev-quickstart">
<span class="doc-meta"><span class="doc-id">01.3</span><span class="doc-tag tag-ops">DEV</span></span>
<strong>Local Dev Quickstart</strong>
<p>維護者日常：ports、進階功能入口、test / check 指令與常見陷阱。</p>
</a>

<a class="doc-card" href="/operations/environment-variables">
<span class="doc-meta"><span class="doc-id">01.4</span><span class="doc-tag tag-critical">ENV</span></span>
<strong>Environment Variables</strong>
<p><code>VITE_*</code> 與後端 env 對照；<code>.env.example</code>；禁止提交 secret／keystore。</p>
</a>

<a class="doc-card" href="/guide/authentication">
<span class="doc-meta"><span class="doc-id">01.5</span><span class="doc-tag tag-auth">AUTH</span></span>
<strong>Authentication</strong>
<p>Google Sign-In、server auth code、backend OAuth exchange；與自動備份重新授權。</p>
</a>

<a class="doc-card" href="/operations/auth-and-security-operations">
<span class="doc-meta"><span class="doc-id">01.6</span><span class="doc-tag tag-ops">SECURITY</span></span>
<strong>Auth &amp; Security Ops</strong>
<p>App 安全鎖、session、rate limit、production env 檢查清單。</p>
</a>

</div>

## 02 · 功能域與資料流

<div class="doc-grid">

<a class="doc-card" href="/domains/bookkeeping">
<span class="doc-meta"><span class="doc-id">02.1</span><span class="doc-tag tag-domain">DOMAIN</span></span>
<strong>Bookkeeping</strong>
<p>AI／手動／問答記帳、交易列表、搜尋與 home 篩選 composable。</p>
</a>

<a class="doc-card" href="/domains/budget">
<span class="doc-meta"><span class="doc-id">02.2</span><span class="doc-tag tag-domain">DOMAIN</span></span>
<strong>Budget</strong>
<p>月預算、分類預算、日均規則、發薪週期與共同池。</p>
</a>

<a class="doc-card" href="/domains/analysis-reports">
<span class="doc-meta"><span class="doc-id">02.3</span><span class="doc-tag tag-domain">DOMAIN</span></span>
<strong>Analysis &amp; Reports</strong>
<p>分類／帳戶／時間柱狀分析、PDF 匯出、SQL 彙總路徑。</p>
</a>

<a class="doc-card" href="/domains/sync-backup-shared-ledger">
<span class="doc-meta"><span class="doc-id">02.4</span><span class="doc-tag tag-domain">SYNC</span></span>
<strong>Sync, Backup &amp; Shared Ledger</strong>
<p>GDrive 帳本同步、WebDAV 自動備份、共同帳本快照與衝突策略。</p>
</a>

<a class="doc-card" href="/domains/bank-sync-einvoice">
<span class="doc-meta"><span class="doc-id">02.5</span><span class="doc-tag tag-domain">NATIVE</span></span>
<strong>Bank Sync &amp; E-Invoice</strong>
<p>Android WebView 原生銀行自動化、載具 API、Arch B runbook 入口。</p>
</a>

<a class="doc-card" href="/domains/android-capacitor">
<span class="doc-meta"><span class="doc-id">02.6</span><span class="doc-tag tag-domain">ANDROID</span></span>
<strong>Android &amp; Capacitor</strong>
<p>Capacitor 8 插件、Wear 伴侶、widget 與 build 管線概覽。</p>
</a>

</div>

## 03 · 發版、測試與營運

<div class="doc-grid">

<a class="doc-card" href="/operations/release-process">
<span class="doc-meta"><span class="doc-id">03.1</span><span class="doc-tag tag-ops">RELEASE</span></span>
<strong>Release Process</strong>
<p>版本 <code>a.b.c.d</code>、<code>npm run gpr</code>、tag 與 Play internal／production 通道。</p>
</a>

<a class="doc-card" href="/operations/testing-and-verification">
<span class="doc-meta"><span class="doc-id">03.2</span><span class="doc-tag tag-ops">TEST</span></span>
<strong>Testing &amp; Verification</strong>
<p>Node test、smoke、禁止新增 source-only 測試的政策與替代方案。</p>
</a>

<a class="doc-card" href="/operations/playwright-app-shell">
<span class="doc-meta"><span class="doc-id">03.3</span><span class="doc-tag tag-critical">E2E</span></span>
<strong>Playwright App Shell</strong>
<p>UI 改動驗收、bootstrap <code>pageerror</code>、現代／傳統 layout 雙軌。</p>
</a>

<a class="doc-card" href="/operations/android-native-bank-apk">
<span class="doc-meta"><span class="doc-id">03.4</span><span class="doc-tag tag-critical">APK</span></span>
<strong>Native Bank APK</strong>
<p>銀行同步 Java 變更必須重建 release APK；與 web-only deploy 的差異。</p>
</a>

<a class="doc-card" href="/operations/backend-deployment-and-health">
<span class="doc-meta"><span class="doc-id">03.5</span><span class="doc-tag tag-ops">DEPLOY</span></span>
<strong>Backend Deploy &amp; Health</strong>
<p><code>deploy:copy</code>、Docker StrawMB、container 內 native 依賴陷阱。</p>
</a>

<a class="doc-card" href="/operations/troubleshooting">
<span class="doc-meta"><span class="doc-id">03.6</span><span class="doc-tag tag-ops">FORENSICS</span></span>
<strong>Troubleshooting</strong>
<p>OAuth、同步、銀行 captcha、CI 與 Play 常見失敗模式索引。</p>
</a>

</div>

## 04 · 架構與核心模組

<div class="doc-grid">

<a class="doc-card" href="/architecture/overview">
<span class="doc-meta"><span class="doc-id">04.1</span><span class="doc-tag tag-arch">CORE</span></span>
<strong>Architecture Overview</strong>
<p>本機優先、backend 協作邊界、mermaid 系統圖與技術棧表。</p>
</a>

<a class="doc-card" href="/architecture/application-layers">
<span class="doc-meta"><span class="doc-id">04.2</span><span class="doc-tag tag-arch">LAYERS</span></span>
<strong>Application Layers</strong>
<p><code>ui/</code> vs <code>core/</code> 依賴方向、Store／Service／Repository 職責。</p>
</a>

<a class="doc-card" href="/guide/data-model-and-storage">
<span class="doc-meta"><span class="doc-id">04.3</span><span class="doc-tag tag-arch">DATA</span></span>
<strong>Data Model &amp; Storage</strong>
<p>SQLite schema 概念、帳本 lifecycle、migration 注意事項。</p>
</a>

<a class="doc-card" href="/guide/frontend-stack">
<span class="doc-meta"><span class="doc-id">04.4</span><span class="doc-tag tag-arch">UI</span></span>
<strong>Frontend Stack</strong>
<p>Vue 3、Pinia、Habitat layout、i18n 與路由模組化。</p>
</a>

<a class="doc-card" href="/guide/backend-api">
<span class="doc-meta"><span class="doc-id">04.5</span><span class="doc-tag tag-arch">API</span></span>
<strong>Backend API</strong>
<p>共同帳本 REST、session cookie、collab-store 檔案位置。</p>
</a>

<a class="doc-card" href="/architecture/startup-and-runtime">
<span class="doc-meta"><span class="doc-id">04.6</span><span class="doc-tag tag-arch">RUNTIME</span></span>
<strong>Startup &amp; Runtime</strong>
<p>App 啟動鏈、store hydration、跨日發薪週期 rollover 觸發點。</p>
</a>

</div>

---

### Community &amp; Support

文件無法解決問題時：

- **Issue**：[StrawMoneyBook Issues](https://github.com/StrawCoding/StrawMoneyBook/issues)（bug／功能請用模板描述重現步驟與版本號）
- **商用授權**：PolyForm NC 不包含商用權 → 見 [Open Source &amp; License](/operations/open-source-and-license#商用授權)
- **產品能力**：主 repo [`StrawMoneyBook_App_Features_Detailed.md`](https://github.com/StrawCoding/StrawMoneyBook/blob/main/StrawMoneyBook_App_Features_Detailed.md)
