// craco.config.js
const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src'), // 允许通过@符号来表示 src目录
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8080/', //需要代理的地址
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
        },
      },
    },
  },
}
