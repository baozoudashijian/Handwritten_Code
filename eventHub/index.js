// 手写eventHub
const EventHub = {
    q: {}, // 选择的数据结构队列
    on: (type, listener) => {
        EventHub['q'][type] = EventHub['q'][type] || [] // 防御型编程
        EventHub['q'][type].push(listener)
    },
    emit: (type, data) => {
        EventHub['q'][type].map((listener) => listener(data))
    }
}

EventHub.on('crash', (data) => {
    console.log(data)
})

EventHub.on('run', (data) => {
    console.log(data)
})

EventHub.emit('crash', 'crash')
EventHub.emit('run', 'run')