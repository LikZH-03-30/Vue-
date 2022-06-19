const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭lintOnSave
  lintOnSave: false,
  // 写原生webpack的配置项
  configureWebpack: { 
        devServer: { 
          open: true,
          port: 3000,
          // 更改端口号，localhost,或者127.0.0.1
          host:'localhost',
        }
  }
});
