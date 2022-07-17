<template>
    <div>
        <ul>
            <li v-for="item in infos" :key="item.id">
                <router-link to="/home/messages/detail">{{item.title}}</router-link>
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