<template>
    <div class="layout">
        <div class="layout-header">
            <layout-header></layout-header>
        </div>
        <div class="layout-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import layoutHeader from './layout-header'
export default {
    data(){
        return{

        }
    },
    components:{
        layoutHeader
    }
}
</script>

<style>
    .layout{
        display: flex;
        flex-direction: column;
    }
    .layout-header{
        /* display: flex;
        flex-direction: column; */
        padding-bottom: 50px;
        border-bottom: 2px saddlebrown solid;
    }
</style>