<template>
    <ul class="todo-main">
        <Item v-for="(t, index) in todos" :key="t.id" :todo="t" :index="index" @updateTodo="updateTodo" @deleteTodo="deleteTodo"/>
    </ul>
</template>

<script>
    import Item from './Item';
    export default {
        name: 'List',
        components:{Item},
        props:['todos'],
        methods:{
            deleteTodo(index){
                this.$emit('deleteTodo', index);
            },
            updateTodo(index, checked){
                this.$emit('updateTodo', index, checked);
            }
        }
    }
</script>

<style scoped>
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>