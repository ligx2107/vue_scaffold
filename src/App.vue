<template>
    <div>
        <button @click="getFocus">点击获取光标</button>
        <!-- 给html内置input标签打了一个ref，通过$refs.warning获取 -->
        <input type="text" ref="inputType">
        <!-- 给组件标签打ref，通过$refs获取到组件的实例 -->
        <CarInfo ref="carInfo" :propInfo="propInfo"/>
    </div>
</template>

<script>
    // 引入组件
    import CarInfo from './components/CarInfo.vue';

    export default {
        data(){
            return {
                propInfo: 'propInfo'
            }
        },
        // 注册组件
        components: {CarInfo},
        methods: {
            getFocus(){
                this.$refs.inputType.focus();
                console.log(this.$refs.carInfo);
            }
        }
    }
</script>