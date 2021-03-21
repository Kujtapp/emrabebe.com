export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'emrabebe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  i18n: {
    locales: [
      { code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.js'
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-FR',
        file: 'fr.js'
      }
    ],

    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    // vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'en',
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  // recommended
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'nuxt-i18n',
    'vue-sweetalert2/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: 'http://localhost:8000',
    credentials: true,
  },

  auth: {
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: "http://localhost:8000",
        endpoints: {
          login: {
            url: '/api/login'
          },
          logout: {
            url: '/api/logout'
          },
          user: {
            url: '/api/user'
          },
        },
        user: {
          property: false
        }
      },
    },
    redirect: {
      login: '/auth/login',
      logout: '/',
      home: '/admin/dashboard',
    },
    resetOnError: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
