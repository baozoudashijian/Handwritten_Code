// 英雄技能冷却
function throttle(fn, time) {
    let timer;
    console.log(timer, '1')
    if (!timer) {
        timer = setTimeout(() => {
            fn();
            timer = null;
        }, time)
    }
    console.log(timer, '2')
}

function qwer() {
    console.log('释放技能！')
}

// throttle(qwer, 3000)