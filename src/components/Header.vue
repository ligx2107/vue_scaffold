<template>
    <div class="todo-header">
        <input 
            v-model="todoName" 
            @keyup.enter="add"
            type="text" 
            placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
                todoName: ''
            }
        },
        methods:{
            add(){
                // 触发父组件定义事件，增加todo事项
                this.$emit('addTodo', {id:Date.now(), title: this.todoName, done: false});

                // 清空输入框中内容
                this.todoName = ''
            }
        }
    }
</script>

<style scoped>
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>