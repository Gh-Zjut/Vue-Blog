import axios from "axios"
import showMessage from "@/utils/showMessage.js"

const ins = axios.create();
ins.interceptors.response.use(function (resp) {
    if (resp.data.code !==0 ){
        showMessage({
            content:resp.data.msg,
            type: "error",
            dutation: 1500
        })
        return null
    }else{
        return resp.data.data
    }
})

export default ins;