// 英雄联盟回城
function debounce(fn, time) {
    let timer;
    return () => {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
        }, time);
    }

}

function backHome() {
    console.log('回城！')
}

let fn = debounce(backHome, 3000)