<template>
  <div class="text-container">
      <Empty />
  </div>
</template>

<script>
import Empty from "./index.vue"
export default {
    components: {
        Empty
    }
}
</script>

<style>
    .text-container{
        width: 600px;
        height: 400px;
        border: 2px solid black;
        margin: 0 auto;
        position: relative;
    }
</style>