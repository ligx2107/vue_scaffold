<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
        <ul class="nav nav-tabs">
            <li>
                <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
                <router-link class="list-group-item" active-class="active" to="/home/messages">Message</router-link>
            </li>
        </ul>
        <!-- keep-alive可以让路由组件切换时不进行销毁操作, include配置的是不做销毁操作的组件的名字 -->
        <keep-alive include="News">
            <router-view></router-view>
        </keep-alive>
        </div>
    </div>
</template>

<script>
    import News from './News'
    export default {
        name: 'Home',
        components: {News}
    }
</script>