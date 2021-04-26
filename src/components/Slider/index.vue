<template>
    <div class="slider-container" ref="container" @mousemove="handleMousemove" @mouseleave="handleMouseleave">
        <div class="slider-img" ref="image" :style="imagePosition">
            <ImageLoader  :src="carousel.bigImg" :placeholder="carousel.midImg"  @load="this.showWords" />
        </div>
        <div class="title" ref="title">{{carousel.title}}</div>
        <div class="desc" ref="desc">{{carousel.description}}</div>
    </div>
</template>

<script scoped>
import ImageLoader from "@/components/ImageLoader"
export default {
    components:{
        ImageLoader
    },
    props:["carousel"],
    data(){
        return {
            titleWidth: 0,
            descWidth: 0,
            containSize: null,
            imageSize:null,
            mouseX: 0,
            mouseY: 0
        }
    },
    mounted(){
        this.titleWidth = this.$refs.title.clientWidth;
        this.descWidth = this.$refs.desc.clientWidth;
        this.setSize();
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
        window.addEventListener('resize',this.setSize)
    },
    destroyed(){
        window.removeEventListener('resize',this.setSize)
    },
    methods:{
        showWords(){
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;
            this.$refs.title.clientHeight;   //强制渲染
            this.$refs.title.style.transition = "1s";
            this.$refs.title.style.width = this.titleWidth + 'px';

            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.width = 0;
            this.$refs.desc.clientHeight;   //强制渲染
            this.$refs.desc.style.transition = "2s ease-in-out 1s ";
            this.$refs.desc.style.width = this.descWidth + 'px';
        },
        setSize(){
            this.containSize = {
                width: this.$refs.container.clientWidth,
                height: this.$refs.container.clientHeight
            },
            this.imageSize = {
                width: this.$refs.image.clientWidth,
                height: this.$refs.image.clientHeight
            }
        },
        handleMousemove(e){
            const rect = this.$refs.container.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        },
        handleMouseleave(){
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        }
    },
    computed:{
        imagePosition () {
            if(!this.imageSize || !this.containSize){
                return {}
            }
            const extraWidth = this.imageSize.width - this.containSize.width;
            const extraHeight = this.imageSize.height - this.containSize.height;
            const top = -extraHeight * this.mouseY /this.containSize.height;
            const left = -extraWidth * this.mouseX / this.containSize.width
            return {
                transform:`translate(${left}px, ${top}px)`
            }
        },
        center(){
            return {
                x: this.containSize.width/2,
                y: this.containSize.height/2
            }
        }
    }
}
</script>

<style scoped>
.slider-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.slider-img{
    width: 110%;
    height: 110%;
    position: absolute;
    z-index: -1;
    transition: .5s;
}
.title, .desc{
    position: absolute;
    letter-spacing: 3px;
    left: 30px;
    color:#eee;
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
}
.title{
    top:calc(50% - 40px);
    font-size: 2em;
    text-shadow: 1px 1px 1px rgba(0,0,0,.6),1px -1px 1px rgba(0,0,0,.6),-1px 1px 1px rgba(0,0,0,.6),-1px -1px 1px rgba(0,0,0,.6);
}
.desc{
    top: calc(50% + 20px);
    font-size: 1.2em;
    text-shadow: 1px 1px 1px rgba(0,0,0,.6),1px -1px 1px rgba(0,0,0,.6),-1px 1px 1px rgba(0,0,0,.6),-1px -1px 1px rgba(0,0,0,.6);
}

</style>