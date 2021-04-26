<template>
  <div class="test-container">
      <RightList :list='list' @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./index.vue";
export default {
    components:{
        RightList
    },
    data () {
        return {
            list: [
            { name: "a", isSelect: false },
            { name: "b", isSelect: true },
            {
            name: "c",
            isSelect: false,
            children: [
                { name: "c-1", isSelect: false },
                {
                name: "c-2",
                isSelect: false,
                children: [
                    { name: "c-2-1", isSelect: true },
                    { name: "c-2-2", isSelect: false },
                    { name: "c-2-3", isSelect: false },
                    { name: "c-2-4", isSelect: false },
                ],
                },
                { name: "c-3", isSelect: false },
                { name: "c-4", isSelect: false },
            ],
            },
            { name: "d", isSelect: false },
        ],
        }
    },
    methods:{
        handleSelect(item){
            console.log(item);
        }
    }
}
</script>

<style>

</style>