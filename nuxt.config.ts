// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Itologist – Modernise, Host & Monitor Your Systems',
      meta: [
        {
          name: 'description',
          content:
            'Itologist modernises your business systems, hosts them, and quietly monitors everything – meeting-free IT for small businesses.',
        },
        {
          name: 'keywords',
          content:
            'IT consultant, small business IT, IT modernisation, web app development, managed hosting, monitoring, New Zealand, NZ small business, Itologist',
        },
      ],
    },
  },
  nitro: {
    preset: 'static',
  },
});
