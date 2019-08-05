function ajax (count, num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(count)
            res()
        }, num)
    }) 
}

async function control () {
    let count = 0
    while (count <= 4) {
        await ajax(count, 1000).then(res => count++)
    }
    while (count > 4 && count <= 7) {
        await ajax(count, 2000).then(res => count++)
    }
}
control()