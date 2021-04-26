import defaultUrl from "@/assets/defaultImg.svg"
import eventBus from "@/eventBus.js"
import debounce from "@/utils/debounce"
var imgs = [];

function handleScroll (dom) {
    if (!dom){
        imgs = []
    }
    imgs.forEach((ele,index)=>{
        handleImg(ele);
    }) 
}

function handleImg (ele) {
    if (ele.isHandled){
        return
    }
    const rect = ele.dom.getBoundingClientRect();
    const height = rect.top || 150;
    if (rect.top >= -rect.height && rect.top <= document.documentElement.clientHeight){
        const tempImg = new Image();
        tempImg.src = ele.src;
        tempImg.onload = function () {
            ele.dom.src = ele.src
        }
        ele.isHandled = true;
    }
}
eventBus.$on("mainScroll",debounce(handleScroll, 50))

export default {
    inserted(el, binding) {
        let img = {
            dom:el,
            src:binding.value,
            isHandled: false
        }
        img.dom.src = defaultUrl
        imgs.push(img);
        handleImg(img)
    },
    unbind (el) {
        imgs = imgs.filter((img)=> img.dom != el)
    }
    
}