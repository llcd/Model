<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-button type="primary" plain @click="goParent">去父组件</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
  </div>
</template>

  

<script>

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods:{
    goParent(){
      console.log("去父组件")
      location.hash = "parent"
      // this.$router.push('./parent')
    },
  },
  components:{
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
