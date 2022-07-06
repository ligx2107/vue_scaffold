<template>
    <div class="app">
        <h2>我是父组件</h2>
        <!--
            自定义事件：适合子组件向父组件传递数据的场景

            此处为子组件CustomizeEvent的实例对象定义一个testCE事件
            当子组件实例对象触发该事件时，父类对应的test方法将被调用
         -->
        <CustomizeEvent @testCE="test"/>

        <!--
            自定义事件的第二种写法 
            <CustomizeEvent ref="cedemo"/>
        -->
    </div>
</template>

<script>
    import CustomizeEvent from './components/CustomizeEvent';
    export default {
        name: 'App',
        components:{CustomizeEvent},
        methods: {
            test(value){
                console.log(`子组件传递的参数为：${value}`);
            }
        },
        // 自定义事件的第二种写法，通过ref获取子组件的实力对象，然后调用$on方法绑定自定义事件及回调
        // mounted(){
        //     this.$refs.cedemo.$on('testCE', this.test)
        // }
    }
</script>

<style>
    .app{
        background-color: skyblue;
        padding: 5px;
    }
</style>