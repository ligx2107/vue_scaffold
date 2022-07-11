<template>
    <div class="info">
        <h2 class="title">{{title}}信息</h2>
        <!-- 默认插槽 -->
        <!-- <slot></slot> -->

        <!-- 具名插槽 -->
        <slot name="games"></slot>
        <slot name="foods"></slot>
    </div>
</template>

<script>
    export default {
        name: 'Category',
        props: ['title']
    }
</script>

<style>
    .info{
        width: 500px;
        height: 700px;
        background-color:skyblue;
    }

    .title{
        text-align: center;
    }
</style>