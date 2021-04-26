<template>
  <div class="test-container">
      <SetAside />
  </div>
</template>

<script>
import SetAside from "./index.vue";
export default {
    components:{
        SetAside
    }
}
</script>

<style>
    .test-container{
        width: 250px;
        height: 100vh;
    }
</style>