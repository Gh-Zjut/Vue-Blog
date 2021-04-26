export default function (fn, duration=1000) {
    var timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout (()=>{
            fn(...args)
        }
        ,duration)
    }
}