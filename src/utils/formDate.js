export default function fromDate (time, moreMessage = false) {
    const temp = new Date(+time);
    const year = temp.getFullYear();
    const month = (temp.getMonth() + 1).toString().padStart(2,"0");
    const day = temp.getDate().toString().padStart(2,"0");
    let res = `${year}-${month}-${day}`
    if (moreMessage) {
        const hour = temp.getHours().toString().padStart(2,"0");
        const minute = temp.getMinutes().toString().padStart(2,"0");
        const second = temp.getSeconds().toString().padStart(2,"0");
        res = res + `  ${hour}:${minute}:${second}`
    }
    return res;
}