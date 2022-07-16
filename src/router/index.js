/**
 * 该文件是Vue中路由器文件，管理着所有路由
 */

import Vue from 'vue'
import vueRouter from 'vue-router'
// 引入路由组件
import About from '../pages/About'
import Home from '../pages/Home.vue'
import Home2 from '../pages/Home2.vue'

// Vue注册vue-router插件
Vue.use(vueRouter)

// 创建一个路由器，管理所有路由
const router = new vueRouter({
    routes:[
        {
            path: '/About',
            component: About
        },
        {
            path: '/home',
            // 一个路径对应多个组件的场景
            components:{
                h1: Home,
                h2: Home2
            }
        }
    ]
})

export default router