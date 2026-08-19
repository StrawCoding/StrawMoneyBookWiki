import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'StrawMoneyBook Wiki',
  description: 'Official technical operation wiki for StrawMoneyBook',
  lang: 'zh-Hant',
  base: '/StrawMoneyBookWiki/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Core Guides', link: '/local-dev-quickstart' }
    ],
    sidebar: [
      {
        text: 'Core Guides',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Local Dev Quickstart', link: '/local-dev-quickstart' },
          { text: 'Testing and Verification', link: '/testing-and-verification' },
          { text: 'Troubleshooting', link: '/troubleshooting' }
        ]
      },
      {
        text: 'Others (Legacy Markdown)',
        items: [
          { text: 'Environment Variables', link: '/legacy/Environment-Variables' },
          { text: 'CI CD and Gates', link: '/legacy/CI-CD-And-Gates' },
          { text: 'Release Process', link: '/legacy/Release-Process' },
          { text: 'Android Release and Play Upload', link: '/legacy/Android-Release-And-Play-Upload' },
          { text: 'Backend Deployment and Health', link: '/legacy/Backend-Deployment-And-Health' },
          { text: 'Backups and Restore', link: '/legacy/Backups-And-Restore' },
          { text: 'Auth and Security Operations', link: '/legacy/Auth-And-Security-Operations' },
          { text: 'Sync Operations Runbooks', link: '/legacy/Sync-Operations-Runbooks' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/StrawCoding/StrawMoneyBookWiki' }
    ]
  }
})

