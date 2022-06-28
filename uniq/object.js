// 使用对象去重
const arr = [1, 1, 23, 3, 4, 5, 3, 4]

function uniq(arr) {
    const obj = {}
    for(let i=0; i<arr.length; i++) {
        if(obj[arr[i]]) {
            continue
        } else {
            obj[arr[i]] = true
        }
    }
    return Object.keys(obj)
}

console.log(uniq(arr))