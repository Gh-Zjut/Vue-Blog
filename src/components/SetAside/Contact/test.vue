<template>
  <div class="test-container">
      <Contact />
  </div>
</template>

<script>
import Contact from "./index"
export default {
    components:{
        Contact
    }
}
</script>

<style scoped>
.test-container{
    width: 250px;
    height: 600px;
    border: 2px solid red;
    background: black;
    margin: 0 auto;
    padding-top: 200px;
}
</style>