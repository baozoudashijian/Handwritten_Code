// 手写eventHub
const EventHub = {
    q: {}, // 选择的数据结构队列
    on: (type, listener) => {
        EventHub['q'][type] = EventHub['q'][type] || [] // 防御型编程
        EventHub['q'][type].push(listener)
    },
    emit: (type, data) => {
        EventHub['q'][type].map((listener) => listener(data))
    },
    off: (type, handler) => {
        EventHub['q'][type].splice(EventHub['q'][type].findIndex((fn) => fn == handler ) ,1)
    }
    // off移除监听方法，你不监听不就完事了
}

const fn = (data) => {
    console.log(data)
}

EventHub.on('crash', fn)

EventHub.off('crash', fn)

EventHub.on('run', fn)

EventHub.emit('crash', 'crash')
EventHub.emit('run', 'run')