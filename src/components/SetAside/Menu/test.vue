<template>
    <div class="test-container">
        <Menu />
    </div>
</template>

<script>
import Menu from "./index.vue"
import "@/styles/global.less"
export default {
    components:{
        Menu
    }
}
</script>

<style>
.test-container{
    width: 300px;
    height: 600px;
    border: 2px solid red;
    background: black;
    margin: 0 auto;
}
</style>