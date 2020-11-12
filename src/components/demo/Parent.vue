<template>
  <div>
      <h1> {{msg}} </h1>
      <!-- <el-button type="warning" round @sendMsg="acceptMsg">接收来自子组件的信息</el-button> -->
      <input type="text" v-model="hobby">
      <ul class="objList">
        <li> 姓名--年龄--编号</li>
        <li v-for="item in obj"  :key="item.id">
            {{item.name}} --- {{item.age}} --- {{item.id}}
        </li>
      </ul>
      <hr>
      <child :objParent="obj" @sendMsg="acceptMsg">
          <div slot="name">我是名字</div>
          <div slot="age">我是年龄</div>
      </child>
  </div>
</template>

<script>
// import Child from '@components/Child.vue'
import Child from '@/components/demo/Child'
export default {
  data(){
      return {
          msg:"我是父组件",
          obj:[
              {
                  id:1,
                  name:"小王",
                  age:12,
              },
              {
                  id:2,
                  name:'小李',
                  age:22
              },
              {
                  id:3,
                  name:"老张",
                  age:33
              }
          ],
          hobby:null,
      }
  },
  methods:{
      acceptMsg( msg ){
        //   console.log("开始接收子组件的数据")
          this.hobby = msg;
      }
  },
  components:{
      child:Child,
  }
}
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
}
.objList{
    list-style: none;
}
</style>