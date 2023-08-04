<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Test Mock datas</h3>
      <div>
        <input type="text" v-model="searchParam" placeholder="enter the name you search"/>&nbsp;
        <button @click="doSearch">Search</button>
      </div>
    </section>
</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = "/mock";
    export default {
        name: 'Search',
        data(){
            return {
                searchParam: ''
            }
        },
        methods: {
            async doSearch(){
                try {
                    const response = await axios.get('/test');
                    const mockData = response.data;
                    console.log("模拟数据: \n", mockData);
                } catch(e) {
                    console.error("数据获取失败...");
                }
            }
        }
    }
</script>

<style>

</style>