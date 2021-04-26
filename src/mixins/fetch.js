//远程获取数据的代码
export default function (defaultData = null){
   return { 
    data() {
        return{
            isLoading: true,    //是否正在加载，svg显示
            data:defaultData    //默认值
        }
    },
    async created () { 
        this.data = await this.fetchData();     //需要实例对象提供fetchData方法
        // console.log(this.data);
        this.isLoading = false;                 //请求完成修改isloading的值
    }
    }
}