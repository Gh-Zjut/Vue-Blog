import request from "./request.js"

export async function getSettings () {
    return await request.get('/api/setting')
}
