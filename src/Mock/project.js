import Mock from "mockjs"

Mock.mock("/api/project", "get", {
    "code":0,
    "msg":'',
    "data|3-5":[{
        "title":"@ctitle(2,6)",
        "url":"https://github.com/",
        "desc|1-3":["@cparagraph(2,4)"],
        "img":Mock.Random.image("300x250", "#000", "#fff", "Project Image")
    }]
})