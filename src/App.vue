<template>
     <div>
        <div class="row">
            <Header />
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">

                    <!--  
                    <a class="list-group-item active" href="./about.html">About</a>
                    <a class="list-group-item" href="./home.html">Home</a>
                     -->

                    <!-- 在Vue中使用router-link实现路径改变 -->
                    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                    <router-link  class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <!-- 默认路由组件展示区域 -->
                        <router-view></router-view>
                        <!-- 命名路由组件展示区域, 
                        应对一个路由配置多个组件的场景, 通过name属性指定所要展示的组件 -->
                        <router-view name="h2"></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    export default {
        name: 'App',
        components:{Header}
    }
</script>