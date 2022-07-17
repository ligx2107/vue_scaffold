/**
 * 该文件是Vue中路由器文件，管理着所有路由
 */

import Vue from 'vue'
import vueRouter from 'vue-router'
// 引入路由组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

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
            component: Home,
            children:[
                {
                    // path: '/home/news', 作为/home的二级路由, /home/可省略
                    path: 'news',
                    component: News
                },
                {
                    // path: '/home/message',
                    path: 'messages',
                    component: Message,
                    children:[
                        {
                            path: 'detail',
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ]
})

export default router