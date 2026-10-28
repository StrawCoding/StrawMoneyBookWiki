import { defineConfig } from 'vitepress'

const REPO = 'https://github.com/StrawCoding/StrawMoneyBook'

export default defineConfig({
  title: 'StrawMoneyBook',
  titleTemplate: ':title | Developer Guide',
  description: 'StrawMoneyBook 官方開發者技術文件：架構、模組協作與功能域指南',
  lang: 'zh-Hant',
  base: '/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Architecture', link: '/architecture/overview' },
      { text: 'Domains', link: '/domains/bookkeeping' },
      { text: 'Operations', link: '/operations/' },
      { text: 'GitHub', link: REPO }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is StrawMoneyBook?', link: '/' },
          { text: 'Documentation Hub', link: '/guide/' },
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'Open Source & License', link: '/operations/open-source-and-license' }
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
      },
      {
        text: 'Operations',
        items: [
          { text: 'Home', link: '/operations/' },
          { text: 'Open Source & License', link: '/operations/open-source-and-license' },
          { text: 'Optimization Plan', link: '/operations/optimization-plan' },
          { text: 'Local Dev', link: '/operations/local-dev-quickstart' },
          { text: 'Environment Variables', link: '/operations/environment-variables' },
          { text: 'Closeout & Versioning', link: '/operations/closeout-and-versioning' },
          { text: 'Long-Task Worker', link: '/operations/long-task-worker' },
          { text: 'Playwright App Shell', link: '/operations/playwright-app-shell' },
          { text: 'Testing', link: '/operations/testing-and-verification' },
          { text: 'CI / CD Gates', link: '/operations/ci-cd-and-gates' },
          { text: 'Release Process', link: '/operations/release-process' },
          { text: 'Android Play Upload', link: '/operations/android-release-and-play-upload' },
          { text: 'Native Bank APK', link: '/operations/android-native-bank-apk' },
          { text: 'Payroll Cycle Budget', link: '/operations/payroll-cycle-budget' },
          { text: 'Wear Companion', link: '/operations/wear-companion' },
          { text: 'Sync Architecture B', link: '/operations/sync-architecture-b' },
          { text: 'Sync Runbooks', link: '/operations/sync-operations-runbooks' },
          { text: 'Backend Deploy', link: '/operations/backend-deployment-and-health' },
          { text: 'Backups & Restore', link: '/operations/backups-and-restore' },
          { text: 'Auth & Security', link: '/operations/auth-and-security-operations' },
          { text: 'Troubleshooting', link: '/operations/troubleshooting' },
          { text: 'Technical Optimization', link: '/operations/technical-optimization' }
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
