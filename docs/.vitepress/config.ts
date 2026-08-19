import { defineConfig } from 'vitepress'

const REPO = 'https://github.com/StrawCoding/StrawMoneyBook'

export default defineConfig({
  title: 'StrawMoneyBook',
  titleTemplate: ':title | Developer Guide',
  description: 'StrawMoneyBook 官方開發者技術文件：架構、模組協作與功能域指南',
  lang: 'zh-Hant',
  base: '/StrawMoneyBookWiki/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Architecture', link: '/architecture/overview' },
      { text: 'Domains', link: '/domains/bookkeeping' },
      { text: 'GitHub', link: REPO }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is StrawMoneyBook?', link: '/' },
          { text: 'Quick Start', link: '/quick-start' }
        ]
      },
      {
        text: 'Architecture',
        items: [
          { text: 'Overview', link: '/architecture/overview' },
          { text: 'Application Layers', link: '/architecture/application-layers' },
          { text: 'Startup & Runtime', link: '/architecture/startup-and-runtime' },
          { text: 'Ledger Lifecycle', link: '/architecture/ledger-lifecycle' }
        ]
      },
      {
        text: 'Core Guide',
        items: [
          { text: 'Data Model & Storage', link: '/guide/data-model-and-storage' },
          { text: 'Frontend Stack', link: '/guide/frontend-stack' },
          { text: 'Backend API', link: '/guide/backend-api' },
          { text: 'Authentication', link: '/guide/authentication' }
        ]
      },
      {
        text: 'Feature Domains',
        items: [
          { text: 'Bookkeeping', link: '/domains/bookkeeping' },
          { text: 'Budget', link: '/domains/budget' },
          { text: 'Assets', link: '/domains/assets' },
          { text: 'Loans, Reimbursements & Claims', link: '/domains/loans-reimbursements-claims' },
          { text: 'Analysis & Reports', link: '/domains/analysis-reports' },
          { text: 'Sync, Backup & Shared Ledger', link: '/domains/sync-backup-shared-ledger' },
          { text: 'Membership', link: '/domains/membership' },
          { text: 'Bank Sync & E-Invoice', link: '/domains/bank-sync-einvoice' },
          { text: 'Android & Capacitor', link: '/domains/android-capacitor' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/StrawCoding/StrawMoneyBookWiki' }
    ],
    footer: {
      message: 'StrawMoneyBook Developer Guide',
      copyright: 'Copyright © StrawCoding'
    },
    search: {
      provider: 'local'
    }
  }
})
