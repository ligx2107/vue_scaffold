/* 配置组件模版 */
<template>
    <div>
        <h2>人员信息：</h2><br>
        <h2 class="name">姓名: {{name}}</h2><br>
        <h2 class="age">年龄: {{age}}</h2><br>
        <button @click.prevent="showInfo">点击打印信息</button>
    </div>
</template>

/* 配置组件数据、交互、事件等等 */
<script>
    // 此处只暴露组件配置，并没有创建组件
    export default {
        data(){
            return {
                name: 'Tom',
                age: 18
            }
        },
        methods: {
            showInfo(){
                // this指向组件实例， VueComponent实例
                console.log(`name: ${this.name}, age: ${this.age}`);
            }
        }
    }
</script>

/* 配置组件样式 */
<style>
    .name {
        background-color: blue;
    }
    .age {
        background-color: orange;
    }
</style>