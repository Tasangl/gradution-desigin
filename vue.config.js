const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  lintOnSave: false,
 /*  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.95.11.134:11451/data',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  } */
}
