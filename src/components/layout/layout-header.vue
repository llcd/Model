<template>
  <div class="btns">
    
    <el-button type="success" plain @click="goParent">父子传值</el-button>
    <el-button type="primary" plain @click="goParent1">slot插槽</el-button>
    <el-button type="info" plain>去父组件</el-button>
    <el-button type="warning" plain>去父组件</el-button>
    <el-button type="danger" plain @click="goLayout">回到首页</el-button>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        goParent(){
            // location.hash = 'parent'
            this.$router.push('./parent')
        },
        goParent1(){
            this.$router.push('./parent1')
        },
        goLayout(){
            this.$router.push('./')
        }
    },
    components:[

    ]
};
</script>

<style>
</style>