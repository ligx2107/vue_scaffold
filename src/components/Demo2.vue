<template>
    <div class="demo2">
        <h2>我是组件Demo2</h2>
        <input type="text" v-model="personName"><br/>
        <button @click="sendData">点击向Demo1组件发送数据</button>
    </div>
</template>

<script>
    export default {
        name: 'Demo2',
        data(){
            return {
                personName: ''
            }
        },
        methods:{
            sendData(){
                this.$bus.$emit('sayHello', this.personName);
                this.personName = '';
            }
        }
    }
</script>

<style scoped>
    .demo2{
        background-color: skyblue;
        padding: 10px;
    }
</style>