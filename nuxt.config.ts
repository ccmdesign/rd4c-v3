import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
import projectConfig from "./project_config.json";
import locales from './locales'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

// Aqui está especificado o que eu pensei até agora para o boilerplate
// https://www.notion.so/ccmdesign/Reposit-rio-Inicial-para-Projetos-em-Nuxt-6c1f64c4a65c46eda799a78a08a4c4f5?pvs=4

export default defineNuxtConfig({
  target: 'static',
  nitro: {
    preset: 'netlify-static'
  },
  app: {
    head: {
      title: projectConfig.title,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: 'og:title', property: 'og:title', content: projectConfig.title },
        { hid: 'og:description', property: 'og:description', content: projectConfig.description },
        { hid: 'og:image', property: 'og:image', content: projectConfig.image },
        { hid: 'og:url', property: 'og:url', content: projectConfig.url },
      ],
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
      script: [],
    }
  },

  modules: [
    'nuxt-gtag',
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxt/image',
  ],

  image: {
    directus: {
      baseURL: `${ process.env.BASE_URL }/assets/`,
    }

  },

  css: [
    '@ccmdesign/ccm-ds/assets/css/main.scss',
    'public/assets/theme.css',
    'public/assets/styles.css',
  ],

  components: {
    "dirs": [
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/03-objects'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/04-components'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/05-modules'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/06-sections'),
        "global": true
      },
      "~/components"
    ]
  },

  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === 'v-icon'
    }
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  i18n: {
    lazy: true,
    langDir: 'locales',
    locales,
    defaultLocale: 'en',
    detectBrowserLanguage: false
  },

  ssr: true,

  gtag: {
    id: projectConfig.gtag
  },

  plugins: [
    { src: '~/plugins/list.client.js', ssr: false },
    { src: '~/plugins/clarity.client.js', mode: 'client' }
  ],

  runtimeConfig: {
    public: {
      SEARCH_API_URL: process.env.SEARCH_API_URL
    }
  },

  compatibilityDate: '2025-03-11',
});