import { getSettings } from "../api/setting"
import titleControl from "@/utils/titleControl.js"

export default {
    namespaced:true,
    state:{
        loading:false,
        data:null
    },
    mutations:{
        setLoading(state, payload){
            state.loading = payload
        },
        setData(state, payload){
            state.data = payload
        }
    },
    actions:{
        async getSettings(ctx){
            ctx.commit("setLoading", true);
            const resp = await getSettings();
            ctx.commit("setData", resp)
            ctx.commit("setLoading", false)
            if(resp.title){
                titleControl.setSiteTitle(resp.title);
            }
        }
    }
}