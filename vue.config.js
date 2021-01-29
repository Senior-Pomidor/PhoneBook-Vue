module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test-vue/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/styles.scss";'
      }
    }
  }
}