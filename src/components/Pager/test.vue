<template>
  <div>
    <Pager :current="current" :total="total" @pageChange='handlePageChange'/>
  </div>
</template>

<script>
import Pager from "./index.vue"
export default {
  name: "App",
  components: {
    Pager
  },
  data () {
    return {
      total: 303,
      current: 1
    }
  },
  methods: {
    handlePageChange (newPage) {
      this.current = newPage;
    }
  }
};
</script>

<style>

</style>