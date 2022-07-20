<template>
    <div>
        ID: {{id}} <br />
        TITLE: {{title}} <br />
        CONTENT: {{content}} <br />
    </div>
</template>

<script>
    export default {
        name: 'Detail/:id',
        // 通过路由的props配置接收参数
        props:['id', 'title', 'content'],
        computed: {
            /**
             * 获取params参数, $route.params
             * 
            id(){
                return this.$route.params.id
            },
            title(){
                return this.$route.params.title
            },
            content(){
                return this.$route.params.content
            }
            */

            /**
             * 获取query参数
             
            id(){
                return this.$route.params.id
            },
            title(){
                return this.$route.query.title
            },
            content(){
                return this.$route.query.content
            }
            */
        }
    }
</script>