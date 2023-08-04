<template>
    <div>
        <ul>
            <li v-for="item in infos" :key="item.id">
                <!-- 传递params参数 
                <router-link :to="`/home/messages/detail/${item.id}/${item.title}/${item.content}`">{{item.title}}</router-link>
                -->

                <!-- 传递query参数 
                <router-link :to="`/home/messages/detail?id=${item.id}&title=${item.title}&content=${item.content}`">{{item.title}}</router-link>
                -->

                <!-- 通过命名路由方式跳转及参数传递 -->
                <router-link :to="{
                        name: 'xiangqing', 
                        params:{id: item.id}, 
                        query:{
                            title: item.title,
                            content: item.content
                        }
                    }"
                    >{{item.content}}</router-link>

            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Message',
        data(){
            return {
                infos: [
                    {id: '001', title: '消息1', content: '抽烟'},
                    {id: '002', title: '消息2', content: '喝酒'},
                    {id: '003', title: '消息3', content: '烫头'}
                ]
            }
        }
    }
</script>