import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

const vm = new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this; // 绑定全局事件总线
    },
    el: '#app',
    render: h => h(App)
});