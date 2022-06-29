
function uniq(arr) {
    const result = []

    for(let i=0; i<arr.length; i++) {
        if(result.indexOf(arr[i]) < 0) {
            result.push(arr[i])
        }
    }

    return result
}

const arr = [1, 1, 23, 3, 4, 5, 3, 4]
console.log(uniq(arr))