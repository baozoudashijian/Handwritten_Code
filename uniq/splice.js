
function uniq(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j, 1)
            }
        }
    }

    return arr
}

const arr = [1, 1, 23, 3, 4, 5, 3, 4]
console.log(uniq(arr))