// 英雄技能冷却
function throttle(fn, time) {
    let timer;
    return () => {
        if (!timer) {
            timer = setTimeout(() => {
                fn();
                timer = null;
            }, time)
        }
    }
}

function qwer() {
    console.log('释放技能！')
}

let fn = throttle(qwer, 3000)