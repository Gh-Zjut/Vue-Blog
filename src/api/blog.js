import request from "./request"

/**
 * 获取文章分类
 */
export async function getBlogType () {
    return await request.get('/api/blogtype')
}

/**
 * 获取文章列表
 * @returns 
 */
export async function getBlogs (page = 1, limit = 10, categoryid = -1) {
    return await request.get('/api/blog',{
        params:{
            page,
            limit,
            categoryid
        }
    })
}

/**
 * 获取单个文章
 * @param {} id 
 * @returns 
 */
export async function getBlog (id){
    return await request.get(`/api/blog/${id}`)
}

/**
 * 提交评论
 * @param {} commentInfo 
 * @returns 
 */
export async function postComment (commentInfo) {
    return await request.post('/api/comment',commentInfo)
}

/**
 * 获取全部评论
 * @param {} page 
 * @param {*} limit 
 * @param {*} categoryid 
 */
export async function getComment(blogid, page = 1, limit = 10){
    return await request.get('/api/comment',{
        params:{
            blogid,
            page,
            limit
        }
    })
}