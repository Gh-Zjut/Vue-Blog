import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter);
import Home from "@/views/home.vue"
import Blog from "@/views/blog.vue"
import project from "@/views/project.vue"
import Message from "@/views/message"
import login from "@/views/login"
import BlogDetial from "@/views/blogDetail"
import notFound from "@/views/notFound.vue"
import titleControl from "@/utils/titleControl.js"

const router = new VueRouter ({
  routes:[
    {name:"Home" ,path:"/", component:Home, meta:{title:'首页'}},
    {name:"Blog" ,path:"/blog", component:Blog, meta:{title:"文章"}},
    {name:'BlogPage' , path:'/blog/cate/:categoryId', component:Blog, meta:{title:"文章"}},
    {name:'BlogDetail' , path:'/blog/:id', component:BlogDetial, meta:{title:"文章详情"}},
    {name:"Project", path:'/project', component:project, meta:{title:"项目"}},
    {name:"login" ,path:"/login", component:login, meta:{title:"登录"}},
    {name:"Message" ,path:"/message", component:Message, meta:{title:"留言板"}},
    {name:"notFound" ,path:"*", component:notFound, meta:{title:"未找到页面"}},
  ],
  mode: "history"
})

router.afterEach((to,from) => {
    titleControl.setRouterTitle(to.meta.title)
})
export default router;