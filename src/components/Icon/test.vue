<template>
  <div>
      <div class='item' v-for="t in types" :key='t'>
          <Icon :type='t' />
          <label>{{t}}</label>
      </div>
  </div>
</template>

<script>
import Icon, {types} from "./index.vue"
export default {
    components: {
        Icon
    },
    data () {
        return {
            types
        }
    }
}
</script>

<style>

</style>