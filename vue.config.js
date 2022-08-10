const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false //项目默认安装了eslint语法检查工具，而且默认检查很严格，开发阶段禁用
})
