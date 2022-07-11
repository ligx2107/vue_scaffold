<template>
    <div class="row">
        <h2 v-show="dataInfo.isFirst">Welcom...</h2>
        <h2 v-show="dataInfo.isLoadding">Loadding...</h2>
        <h2 v-show="dataInfo.errorMessage">{{dataInfo.errorMessage}}</h2>
        <div v-show="dataInfo.userData.length" class="card" v-for="user in dataInfo.userData" :key="user.id">
            <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'List',
        data(){
            return {
                dataInfo: {
                    userData: [],
                    isFirst: true,
                    isLoadding: false,
                    errorMessage: ''
                }
                
            }
        },
        methods:{
            saveDataInfo(dataInfo){
                this.dataInfo = {...this.dataInfo, ...dataInfo}
            }
        },
        mounted() {
            // 事件总线上绑定获取数据的事件
            this.$bus.$on('updateDataInfo', this.saveDataInfo);  
        },
        beforeDestroy(){
            // 组件销毁前解绑事件
            this.$bus.$off('updateDataInfo');
        }
    }
</script>

<style scoped>
    .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }

    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }

</style>