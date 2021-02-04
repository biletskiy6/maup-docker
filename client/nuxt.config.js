export default {
  /*
   ** Headers of the page
   */
  server: {
    port: process.env.PORT,
    host: process.env.HOST
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;900&family=Open+Sans:wght@400;700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/theme/index.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/smooth-scrollbar.js', ssr: false },
    { src: '@/plugins/modal.js', ssr: false },
    { src: '@/plugins/vuelidate.js', ssr: true },
    { src: '@/plugins/vue-select', ssr: false },
    // { src: '@/plugins/vue-paginate', ssr: false },
    { src: '@/plugins/youtube', ssr: false },
    { src: '@/plugins/notifications', ssr: false },
    { src: '@/plugins/clipboard', ssr: false },
    { src: '@/plugins/swiper', ssr: false },
    { src: '@/filters/trim', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/svg'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: ['gsap'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
