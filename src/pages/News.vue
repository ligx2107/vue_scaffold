<template>
    <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
    </ul>
</template>

<script>
    export default {
        name: 'News',
        mounted(){
            console.log("News组件挂载了...")
        },
        beforeDestroy(){
            console.log("News组件将要销毁...");
        }
    }
</script>