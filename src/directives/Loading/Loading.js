import LoadingUrl from "@/assets/loading.svg"
import styles from "./Loading.module.less";
function isExit(el) {
    return el.querySelector('img[data-role=loading]');
}

function createImg () {
    const img = document.createElement('img');
    img.dataset.role = 'loading';
    img.className = styles.loading;
    img.src = LoadingUrl;
    return img
}


export default function(el, binding){
    const curImg = isExit(el);
    if(binding.value){
        if (!curImg) {
            const img = createImg();
            el.appendChild(img);
        }
    }else{
        if(curImg){
            curImg.remove();
        }
    }
    
}