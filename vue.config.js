'use strict'
const BASE_URL = process.env.NODE_ENV === 'production' ? '/redrun-admin' : '/'

const path = require('path')
// const name = 'vue开发架构'
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: BASE_URL,

  // 柯里化配置webpack
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },

  // 不需要生产环境的 souce map
  productionSourceMap: false,

  devServer: {
    proxy: 'http://127.0.0.1:4523/mock/362774'
    // proxy:'http://localhost:8080'
  }
}
