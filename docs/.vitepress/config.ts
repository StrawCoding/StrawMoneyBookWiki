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
      { text: 'Local Dev', link: '/local-dev-quickstart' },
      { text: 'Testing', link: '/testing-and-verification' },
      { text: 'Troubleshooting', link: '/troubleshooting' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Local Dev Quickstart', link: '/local-dev-quickstart' },
          { text: 'Environment Variables', link: '/environment-variables' }
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Testing and Verification', link: '/testing-and-verification' },
          { text: 'Troubleshooting', link: '/troubleshooting' }
        ]
      },
      {
        text: 'Operations',
        items: [
          { text: 'CI CD and Gates', link: '/ci-cd-and-gates' },
          { text: 'Release Process', link: '/release-process' },
          { text: 'Android Release and Play Upload', link: '/android-release-and-play-upload' },
          { text: 'Backend Deployment and Health', link: '/backend-deployment-and-health' },
          { text: 'Backups and Restore', link: '/backups-and-restore' },
          { text: 'Auth and Security Operations', link: '/auth-and-security-operations' },
          { text: 'Sync Operations Runbooks', link: '/sync-operations-runbooks' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/StrawCoding/StrawMoneyBookWiki' }
    ],
    footer: {
      message: 'StrawMoneyBook Official Technical Wiki',
      copyright: 'Copyright © StrawCoding'
    }
  }
})
