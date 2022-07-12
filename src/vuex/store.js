// 引入Vue
import Vue from 'vue';

// 引入Vuex
import Vuex from 'vuex';

// 应用Vuex, 之后在vm及所有vc上都存在$store对象
Vue.use(Vuex);

// 初始化状态对象
const state = {
    sum: 0
}

// 创建actions对象，包含多个响应组件动作的函数
const actions = {
    increment(context, value){
        // context是个迷你版的$store，需要调用context.commit()通知mutations加工状态
        context.commit('INCREMENT', value)
    },
    decrement(context, value){
        context.commit('DECREMENT', value);
    },
    incrementSync(context, value){
        setTimeout(() => {
            context.commit('INCREMENT', value);
        }, 500);
    }
}

// 创建mutations对象，包含多个真正用于加工状态的函数
const mutations = {
    INCREMENT(state, value){
        state.sum += value;
    },
    DECREMENT(state, value){
        state.sum -= value;
    }
}

// 创建store，用于管理state对象，actions对象及mutations对象
const store = new Vuex.Store({state, actions, mutations});

// 暴露store
export default store;