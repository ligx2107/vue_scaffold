<template>
    <div class="cc">
        <h2>我是子组件</h2>
        <button @click="passParam">点击向父组件传递数据</button>
    </div>
</template>

<script>
    export default {
        name:'CustomizeEvent',
        data(){
            return {
                name: 'Tom'
            }
        },
        methods: {
            passParam(){
                // 调用组件实例的$emit方法，触发父组件定义的事件
                this.$emit('testCE', this.name);
            }
        }
    }
</script>

<style>
    .cc{
        background-color: gray;
        padding: 5px;
    }
</style>