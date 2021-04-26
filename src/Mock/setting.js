import Mock from "mockjs"

Mock.mock("/api/setting", "get", {
    code:0,
    msg:'',
    data:{
        avatar:'https://huyaimg.msstatic.com/avatar/1089/7c/1bad570ccab5732e7962853248aa59_180_135.jpg?1594724739?449238',
        title:'我的个人博客',
        github:'https://github.com/',
        qq:'953084771',
        weixin:'953084771',
        mail:'953084771@qq.com',
        githubName:'Gh-ZJUT',
    }
})