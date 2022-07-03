import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/**
 * vue.runtime.common.js和vue.js区别:
 *    vue.runtime.common.js(项目中常用)
 *      1. 不包含模版解析器，打包体积小
 *      2. 配置项中不能写template属性，要用render: h => h(app)代替，h函数会调用vue-template-compiler解析模版
 *    vue.js
 *      1. 包含模版解析器，打包体积大
 *      2. 配置项中可以写template属性
 */

new Vue({
  render: h => h(App),
}).$mount('#app')
