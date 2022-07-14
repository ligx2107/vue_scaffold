<template>
    <div>
        <!-- 从store中获取数据 -->
        <h2>当前数字为：{{$store.state.sum}}</h2>
        <h2>当前数字放大十倍为：{{$store.getters.fmtSum}}</h2>
        <select name="number" id="number" v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button @click="increment">+</button> &nbsp;
        <button @click="decrement">-</button> &nbsp;
        <button @click="incrementSync">异步加</button>
    </div>
</template>

<script>
    export default {
        name: 'Count',
        data(){
            return {
                n: 1
            }
        },
        methods: {
            increment(){
                // 调用store所管理的actions对象中的对应处理方法
                this.$store.dispatch('increment', this.n);
            },
            decrement(){
                this.$store.dispatch('decrement', this.n);
            },
            incrementSync(){
                this.$store.dispatch('incrementSync', this.n);
            }
        }
    }
</script>