export default function () {
    return {
        methods:{
            handleMainScroll () {
                this.$bus.$emit('mainScroll', this.$refs.mainContainer)
            },
            handleToTop(top){
                this.$refs.mainContainer.scrollTop = top;
            }
        },
        mounted(){
            this.$bus.$on('toTop' ,this.handleToTop)
            this.$refs.mainContainer.addEventListener("scroll", this.handleMainScroll)
        },
        beforeDestroy(){
            this.$bus.$emit('mainScroll')
            this.$bus.$off('toTop' ,this.handleToTop)
            this.$refs.mainContainer.removeEventListener("scroll",this.handleMainScroll)
        },
    }
}