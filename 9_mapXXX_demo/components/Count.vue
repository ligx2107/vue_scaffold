<template>
    <div>
        <!-- 从store中获取数据 -->
        <h2>当前数字为：{{showSum}}</h2>
        <h2>当前数字放大十倍为：{{fmtSum}}</h2>
        <select name="number" id="number" v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button @click="increment(n)">+</button> &nbsp;
        <button @click="decrement(n)">-</button> &nbsp;
        <button @click="incrementAsync(n)">异步加</button>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
    export default {
        name: 'Count',
        data(){
            return {
                n: 1
            }
        },
        methods: {
            /**
             * 自定义方法实现对应的功能
             * increment(){
                    // 调用store所管理的actions对象中的对应处理方法
                    this.$store.dispatch('increment', this.n);
                },
                decrement(){
                    this.$store.dispatch('decrement', this.n);
                },
                incrementAsync(){
                    this.$store.dispatch('incrementAsync', this.n);
                }
             */

            // 使用mapActions自动生成对应的操作方法，实现组件与store中actions的交互
            ...mapActions(['incrementAsync']),

            /**
             * 当store中actions中定义的动作函数没有实际业务逻辑时，vuex允许组件绕过actions，直接与mutations进行交互
             * 即：在组件中直接调用store的commit方法
             * 使用mapMutations可自动生成对应的操作方，实现组件与store中mutations的交互
             */
            ...mapMutations({
                increment: 'INCREMENT',
                decrement: 'DECREMENT'
            })
        },
        computed: {
            // 手动获取state中的数据并生成计算属性
            // sum(){
            //     return this.$store.state.sum;
            // },

            // 手动获取getters中的数据并生成计算属性
            // fmtSum(){
            //     return this.$store.getters.fmtSum
            // },

            /**
             * 通过mapState自动获取state中的数据并生成计算属性
             * mapState方法实现将计算属性(showSum)与state中的指定属性(sum)进行映射
             * 当计算属性名称与state中指定属性的名称相同时，可使用简写模式：mapState([])
             *  */ 
            ...mapState({
                showSum: 'sum'
            }),

            /**
             * 通过mapGetters自动获取getters中的数据并生成计算属性
             * mapGetters实现原理及用法与mapState相同
             */
            ...mapGetters(['fmtSum'])
        }
    }
</script>