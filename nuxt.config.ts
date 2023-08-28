export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/scss/index.scss'],
  modules: ['nuxt-svgo', 'nuxt-swiper', '@nuxt/image'],
  svgo: {
    defaultImport: 'component',
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              inlineStyles: {
                onlyMatchedOnce: false
              },
              removeDoctype: false,
              removeViewBox: false
            }
          }
        }
      ]
    }
  },
  swiper: {
    modules: ['navigation', 'pagination'],
  }
})
