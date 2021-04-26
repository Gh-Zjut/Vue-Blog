function delay (duration) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },duration)
    })
}

export async function login (msg) {
    await delay(1000);
    if(msg.loginId === 'admin' && msg.passward === '123123'){
        const user = {
            loginId: msg.loginId,
            name:'plainGh'
        }
        localStorage.setItem("user", JSON.stringify(user))
        return user
    }
    return null
}

export async function logout () {
    await delay(1000)
    localStorage.removeItem("user");
}

export async function whoamI () {
    await delay(1000)
    const user = localStorage.getItem("user")
    if (user) {
        return JSON.parse(user);
    }
    return null
}