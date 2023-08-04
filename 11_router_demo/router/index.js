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
                            // 声明接收params参数
                            // path: 'detail/:id/:title/:content',

                            // query方式无需声明接收参数
                            // path: 'detail',

                            // 使用命名路由方式同时传递params与query参数
                            path: 'detail/:id',
                            component: Detail,
                            name: 'xiangqing', // 命名路由

                            // 路由的props配置
                            /**
                             * props: {test: 'hello'}  通过props映射自定义的静态数据
                             * props: true  映射路由的params参数为props传递给路由组件
                             * props(route){return {id: route.params.id, title: route.query.title, content: route.query.content}}
                             */
                            props(route){
                                const {id} = route.params
                                const {title, content} = route.query
                                return {
                                    id,
                                    title,
                                    content
                                }
                            }

                        }
                    ]
                }
            ]
        }
    ]
})

export default router