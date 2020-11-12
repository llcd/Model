<template>
  <div>
    <h1>{{ msg }}</h1>
    
    <el-button type="info" round @click="getMsgFromParent">接收来自父组件的信息</el-button>
    <el-button type="success" round @click="sendMsgToParent">将子组件的信息发送给父组件</el-button>
    <slot name="age"></slot>
    <ul class="objList">
      <li>姓名--年龄--编号</li>
      <li v-for="item in obj" :key="item.id">
        {{ item.name }} --- {{ item.age }} --- {{ item.id }}
      </li>
    </ul>
    <slot name="name"></slot>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ['objParent'],
  data() {
    return {
      msg: "我是子组件",
      obj: null,
      hobby:["吃",'喝','玩','乐']
    };
  },
  methods: {
    getMsgFromParent() {
        console.log("开始接收父组件的数据")
      this.obj = this.objParent;
    },
    sendMsgToParent(){
        console.log('开始发送子组件的数据')
        this.$emit("sendMsg",this.hobby)
    }
  },
};
</script>

<style>
</style>