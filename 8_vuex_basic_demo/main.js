import Vue from 'vue';
import App from './App';
import store from './vuex/store';

Vue.config.productionTip = false;

const vm = new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this; // 绑定全局事件总线
    },
    el: '#app',
    store, // store对象
    render: h => h(App)
});