import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from "./router/router.js"
import "./Mock/index.js"

import showMessage from "./utils/showMessage"
Vue.prototype.$showMessage = showMessage;
import Vloading from "./directives/Loading/Loading.js";
import Vlazy from "./directives/lazy.js"
Vue.directive("loading", Vloading)
Vue.directive("lazy",Vlazy)
import store from "./store/store.js"
store.dispatch("setting/getSettings")
store.dispatch("login/whois")
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

import  "./eventBus.js"


