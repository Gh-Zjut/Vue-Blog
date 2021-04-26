import {login,logout,whoamI} from "@/api/login.js"

export default {
    namespaced:true,
    state:{
        loading:false,
        user:null
    },
    mutations:{
        setLoading(state,payload){
            state.loading = payload
        },
        setUser(state,payload){
            state.user = payload
        }
    },
    getters:{
        status(state){
            if(state.loading){
                return "loading"
            }else if (state.user){
                return "login"
            }else{
                return "unlogin"
            }
        }
    },
    actions:{
        async logIn (ctx, payload) {
            ctx.commit("setLoading",true)
            const user = await login(payload)
            ctx.commit("setUser", user)
            ctx.commit("setLoading", false)
           return new Promise((resolve,reject) => {
               resolve(user)
           })
        },
        async logOut (ctx){
            ctx.commit("setLoading",true)
            await logout()
            ctx.commit("setUser", null)
            ctx.commit("setLoading", false)
        },
        async whois (ctx) {
            ctx.commit("setLoading",true)
            const user = await whoamI()
            ctx.commit("setUser", user)
            ctx.commit("setLoading", false)
        }
    }
}