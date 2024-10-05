export default defineAppConfig({
  appName: 'Kevin Kenfack - Développeur Fullstack Next.js',
  appDescription: "Passionné par la création d'applications web modernes, intuitives et performantes, j'explore l'innovation à chaque projet.",
  profilePicture: '/assets/kevin-kenfack.webp',
  footerName: 'Kevin Kenfack',
  email: 'kevinkenfackjoel@gmail.com',
  twitterUsername: '@kenfackdev',
  phone: '(+33) 9 70 01 90 73',
  openGraphImage: 'https://www.kevinkenfack.com//social-preview.jpg',
  socials: {
    github: 'https://github.com/kevinkenfack',
    twitter: 'https://twitter.com/kenfackdev',
    linkedin: 'https://www.linkedin.com/in/kevinkenfackjoel',
    instagram: 'https://www.instagram.com/kevinkenfackjoel',
    spotify: 'https://open.spotify.com/user/yuvl0zpp3bpx4hne1ag7huten?si=df7ee2777c0c4fc4',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
