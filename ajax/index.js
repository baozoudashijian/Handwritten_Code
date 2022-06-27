const ajax = {
    get: function(url, cb) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.send(null)
        xhr.onreadystatechange = function(data) {
            if(xhr.readyState == 4 && xhr.status >= 300 || xhr.status < 400) {
                cb(data)
            }
        }
    },
    post: function(url, data, cb) {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', url)
        xhr.send(data)
        xhr.onreadystatechange = function(data) {
            if(xhr.readyState == 4 && xhr.status >= 300 || xhr.status < 400) {
                cb(data)
            }
        }
    }
}

ajax.get('/getData', function(data) {
    console.log(data)
})
ajax.post('/saveData', {name: 'zrj'}, function(status) {
    console.log(status)
})