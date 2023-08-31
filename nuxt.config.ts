// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: "Nuxt Typescript Tailwind Starter",
      meta: [
        { name: 'description', content: 'Nuxt Typescript Tailwind Starter' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      ]
    }
  }
})
