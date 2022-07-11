<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" v-model="searchParam" placeholder="enter the name you search"/>&nbsp;
        <button @click="doSearch">Search</button>
      </div>
    </section>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Search',
        data(){
            return {
                searchParam: ''
            }
        },
        methods: {
            async doSearch(){
                try{
                    // 查询前通知List
                    this.$bus.$emit('updateDataInfo', {isFirst: false, isLoadding: true, userData: []});
                    const response = await axios.get('https://api.github.com/search/users',{params: {q: this.searchParam}});
                    const {items} = response.data;
                    // 查询获取到数据通知list
                    this.$bus.$emit('updateDataInfo', {isFirst: false, isLoadding: false, userData: items});
                }catch(e){
                    // 查询失败，通知list
                    this.$bus.$emit('updateDataInfo', {isFirst: false, isLoadding: false, userData: [], errorMessage: e.message});
                }
            }
        }
    }
</script>

<style>

</style>