<template>
  <div>
      <Avatar :url='url' :size='100'/>
  </div>
</template>

<script>
import Avatar from "./index.vue"
export default {
  
    data () {
        return{
            url:'https://huyaimg.msstatic.com/avatar/1089/7c/1bad570ccab5732e7962853248aa59_180_135.jpg?1594724739?449238'
        }
    },
    components:{
        Avatar
    }
}
</script>

<style>

</style>