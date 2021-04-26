<template>
  <div class="blog-toc-container">
      <h2>目录</h2>
      <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "@/components/blog/RightList"
import debounce from "@/utils/debounce.js"
export default {
    components:{
        RightList,
    },
    data(){
        return {
            activeAnchor: ''
        }
    },
    props:{
        toc:{
            type:Array
        }
    },
    methods:{
        handleSelect(item){
            location.hash = item.anchor
        },
        getActiveAnchor (dom) {
            if(!dom){
                return 
            }
            const range = 200;
            for (const dom of this.getDoms) {
                if (!dom){
                    continue
                }
                const top = dom.getBoundingClientRect().top;
                if(top > 0 && top < range ){
                    this.activeAnchor = dom.id;
                    return
                }else if (top > range){
                    return
                }else{
                    this.activeAnchor = dom.id;
                }
            }
        },
    },
    computed:{
        tocWithSelect () {
            const getToc = (t=[]) =>{
                return t.map( item=>({
                    ...item,
                    isSelect: item.anchor == this.activeAnchor,
                    children:getToc(item.children)
                }))
            }
            return getToc(this.toc);
        },
        getDoms () {
            let doms = [];
            const addToDoms = (toc)=>{
                toc.forEach((item)=>{
                    doms.push(document.getElementById(item.anchor));
                    if(item.children && item.children.length){
                        addToDoms(item.children)
                    }
                })
            }
            addToDoms(this.toc);
            return doms
        }
    },
    created(){
        this.debounedEvent = debounce(this.getActiveAnchor, 500)
        this.$bus.$on('mainScroll', this.debounedEvent)
    },
    destroy(){
        this.$bus.$off('mainScroll', this.debounedEvent)
    }
}
</script>

<style scoped lang='less'>
.blog-toc-container{
    h2{
        font-weight:bold;
        letter-spacing: 2px;
        font-size: 1em;
        margin: 0;
    }
}
</style>