<template>
    <!-- parent.vue -->
    <div class="parent">
        <h1>这是父组件</h1>
        <child1>
            <template slot="default" slot-scope="slotProps">
                {{ slotProps }}
                <div v-for="item in slotProps" :key="item.id">
                    {{item.id}} --- {{item.name}} --- {{item.age}}
                </div>
            </template>
        </child1>
        <child2>
            
        </child2>
    </div>
</template>

<script>
import Child1 from "@/components/demo1/Child1";
import Child2 from "@/components/demo1/Child2";
export default {
  components: {
    child1: Child1,
    child2: Child2,
  },
};
</script>

<style>
</style>