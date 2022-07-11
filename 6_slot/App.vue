<template>
    <div class="app">
        <!-- 插槽：为组件动态传入html片段
                1. 默认插槽
                2. 具名插槽
         -->
         <!-- 通过默认插槽方式向Category组件传递html片段 
        <Category title="游戏">
            <ul>
                <li v-for="game in games" :key="game.id">{{game.name}}</li>
            </ul>
        </Category>
        <Category title="美食">
            <ul>
                <li v-for="food in foods" :key="food.id">{{food.name}}</li>
            </ul>
        </Category>
        -->
        <!-- 使用剧名插槽向Category组件传递html片段, 通过template标签的slot属性指定将html片段渲染到具体哪个插槽中 -->
        <Category title="游戏">
            <template slot="games">
                <ul>
                    <li v-for="game in games" :key="game.id">{{game.name}}</li>
                </ul>
            </template>
        </Category>

        <Category title="美食">
            <template slot="foods">
                <ul>
                    <li v-for="food in foods" :key="food.id">{{food.name}}</li>
                </ul>
            </template>
        </Category>
        
    </div>
</template>

<script>
    import Category from './components/Category';
    export default {
        name: 'App',
        components: {Category},
        data(){
            return {
                games: [
                    {id:'001', name:'魔兽世界'},
                    {id:'002', name:'红色警戒'},
                    {id:'003', name:'CS'}
                ],
                foods: [
                    {id: '001', name:'肉夹馍'},
                    {id: '002', name:'羊肉泡馍'},
                    {id: '003', name:'蘸水面'}
                ]
            }
        }
    }
</script>

<style>
    .app{
        display: flex;
        justify-content: space-around;
    }
</style>