import Vue from "vue"
import Vuex from "vuex"
import setting from "./setting.js"
import banner from "./banner.js"
import project from "./project.js"
import login from "./login.js"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        setting,
        banner,
        project,
        login
    },
    strict:true
})

window.store = store;
export default store