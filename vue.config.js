module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/PhoneBook-Vue/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/styles.scss";'
      }
    }
  }
}