<template>
    <li 
    @mouseenter="isEnter = true"
    @mouseleave="isEnter = false"
    :class="{'high-light':isEnter}"
    >
        <label>
            <input type="checkbox" :checked="todo.done" @click="checkOrNot(index, $event)"/>
            <span>{{todo.title}}</span>
        </label>
        <button 
            class="btn btn-danger" 
            :style="{display: isEnter ? 'block' : 'none'}"
            @click="deleteT(index)"
        >删除</button>  
    </li>
</template>

<script>
    export default {
        name: 'Item',
        props:['todo', 'index'],
        data(){
            return {
                isEnter: false
            }
        },
        methods:{
            checkOrNot(index, event){
                // 通知父组件更新todo数据
                this.$emit('updateTodo', index, event.target.checked);
            },

            deleteT(index){
                if(confirm('确认删除吗?')){
                    this.$emit('deleteTodo', index);
                }
            }
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    .high-light {
        background-color: grey;
    }
</style>