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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * Header： 非路由组件
     * 路由组件和非路由组件的却别：
     * 1. 注册：非路由组件是注册在要使用的组件当中，而路由组件是注册在路由配置当中的
     * 2. 使用：非路由组件使用注册的组件标签， 而路由组件使用声明式导航(router-link, router-view)和编程式导航来使用(push/replace)
     * 3. 生命周期： 路由组件在路径切换时，会销毁重建(keep-alive可阻止此操作), 而非路由组件不会
     */
    import Header from './components/Header'
    export default {
        name: 'App',
        components:{Header}
    }
</script>