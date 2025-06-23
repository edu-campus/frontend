import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  css: ['~/assets/tailwind.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', 'shadcn-nuxt'],
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
  shadcn: {
    componentDir: './components/ui'
  }
})