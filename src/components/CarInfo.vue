<template>
  <div>
    <ul>
        <li v-for="(car) in cars" :key="car.id">品牌：{{car.brand}}, 型号：{{car.model}}, 颜色: {{car.color}}</li>
    </ul>
    接收到的数据为：{{propInfo}}
  </div>
</template>

<script>
    export default {
        // 声明配置数据
        data(){
            return {
                cars:[
                    {   
                        id: 1,
                        brand: 'Aodi',
                        model: 'A6',
                        color: 'Black'
                    },
                    {
                        id: 2,
                        brand: 'Aodi',
                        model: 'A4',
                        color: 'White'
                    }
                ]
            }
        },

        // 声明接收props, 接收到的数据同样绑定到组件实例上，props接收的属性名称与data配置的属性名不可重复
        // 完整写法
        // props:{
        //     propInfo:{
        //         type:String, // 接收参数类型
        //         required: true, // 是否可选
        //         default: '2222' // 默认值
        //     }
        // }

        // 简单写法
        props: ['propInfo']
    }
</script>