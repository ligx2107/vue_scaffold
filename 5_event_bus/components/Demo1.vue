<template>
    <div class="demo1">
        <h2>我是组件Demo1</h2>
        <h2>Demo2传递来的数据为: {{personName}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Demo1',
        data(){
            return {
                personName: ''
            }
        },
        methods:{
            sayHello(value){
                this.personName = value;
            }
        },
        mounted(){
            // Demo1中，为全局总线绑定sayHello事件
            this.$bus.$on('sayHello', this.sayHello);
        },
        beforeDestroy(){
            // 组件销毁前，解绑全局事件总线
            this.$bus.$off('sayHello');
        }
    }
</script>

<style scoped>
    .demo1{
        background-color: gray;
        padding: 10px;
    }
</style>