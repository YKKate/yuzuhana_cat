const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/yuzuhana_cat/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/_variables.scss";'
      }
    }
  }
})
