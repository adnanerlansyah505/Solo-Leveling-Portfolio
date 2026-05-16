// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  css: [
    '@/assets/css/tailwind.css'
  ],

  tailwindcss: {
    exposeConfig: true,
    config: {
      content: [
        'components/**/*.{js,vue,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.{js,ts}',
        'app.vue'
      ]
    }
  },

  build: {
    transpile: ['gsap', 'animejs']
  },

  typescript: {
    strict: true
  }
})
