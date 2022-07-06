<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo"/>
      <List :todos="todos" @updateTodo="updateTodo" @deleteTodo="deleteTodo"/>
      <Footer :todos="todos" @updateAll="updateAll" @clearAllDone="clearAllDone"/>
    </div>
  </div>
</template>

<script>
    import Header from './components/Header';
    import List from './components/List';
    import Footer from './components/Footer';
    export default {
        name: 'App',
        components: {
            Header,List, Footer
        },
        data(){
            let todos = [
                    {id:1, title:'抽烟',done:false},
                    {id:2, title:'喝酒',done:true},
                    {id:3, title:'汤头',done:false}
                ]
            try{
                // 解析localStorage中缓存的数据
                todos = JSON.parse(localStorage.getItem('todos')) || todos
            }catch(e){
                // 解析失败
                alert(e.message);
                // 解析失败，删除localStorage中缓存数据
                localStorage.removeItem('todos');
                todos = todos;
            }
            return {
                todos
            }
        },
        methods:{
            // 定义增加todo的方法
            addTodo(todoObj){
                this.todos.unshift(todoObj);
            },

            // 定义todo更新方法
            updateTodo(index, checked){
                this.todos[index].done = checked;
            },

            // 定义删除todo方法
            deleteTodo(index){
                this.todos.splice(index, 1);
            },

            // 更新全部todo
            updateAll(done){
                this.todos.forEach(todo => todo.done = done);
            },

            // 删除所有已完成todo
            clearAllDone(){
                this.todos = this.todos.filter(todo => {
                    return !todo.done;
                });
            }
        },
        mounted(){
            // 组件挂载后，localStorage中缓存数据
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        watch:{
            todos:{
                deep: true, // 开启多级结构属性监听，watch默认情况下实现浅层次监听
                handler(value){
                    localStorage.setItem('todos', JSON.stringify(value));
                }
            }
        }
    }
</script>

<style>
    /*base*/
    body {
        background: #fff;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }
</style>