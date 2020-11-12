<template>
    <!-- child.vue -->
    <div class="child">
        <h1>这是子组件</h1>
        <slot :user="user" :apple="apple"></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {
                id:1,
                name: '小赵',
                age:18
            },
            apple:{
                id:2,
                name:"red",
                age:100
            }
        }
    }
}
</script>