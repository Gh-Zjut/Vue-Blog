import Vue from "vue"
import Icon from "@/components/Icon"
import Styles from "./showMessage.module.less"
/**
 * 弹出消息
 * @param {*} content       弹出的内容
 * @param {*} type          弹出消息的形式 info error success warn 
 * @param {*} duration      多久消失
 * @param {*} container     外容器
 */
export default function (option) {
    const content = option.content || '成功';
    const type = option.type || 'info';
    const duration = option.duration || 2000;
    const container = option.container || document.body;
    const div = document.createElement('div');
    const el = getPonentRootDom(Icon, {
        type
    })
    div.className = `${Styles.message} ${Styles["message-"+type]}`;
    div.innerHTML = `<span class='${Styles.icon}'>${el.outerHTML}</span><div>${content}</div>`
  
    if (option.container){
        if (getComputedStyle(container).position === 'static'){
            container.style.position = 'relative'
        }
    }
    
    container.appendChild(div);
    //强行渲染,重排
    div.clientHeight;

    div.style.opacity = 1;
    div.style.transform = `translate(-50% ,-50%)`;
    setTimeout(()=>{
        div.style.opacity = 0;
        div.style.transform = `translate(-50% ,-50%) translateY(-15px)`;
        div.addEventListener("transitionend",function () {
            div.remove();
            option.callback && option.callback();
        }, {once:true})
    },duration)
}

function getPonentRootDom (comp ,props) {
    const vm = new Vue ({
        render: h => h(comp, {props}) 
    })
    vm.$mount();
    return vm.$el;
}