// var listeners = {};

// export default {
//     $on(event, handler){
//         if(!listeners[event]){
//             listeners[event] = new Set();
//         }
//         listeners[event].add(handler)
//     },
//     $off(event, handler){
//         if(!listeners[event]){
//             return
//         }
//         listeners[event].delete(handler);
//     },
//     $emit(event,...arg){
//         if(listeners[event]){
//             listeners[event].forEach((ele)=>{
//                 ele(...arg)
//             })
//         }
//     }
// }

import Vue from "vue"
const bus = new Vue({})
export default bus
Vue.prototype.$bus = bus