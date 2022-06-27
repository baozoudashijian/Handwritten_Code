// 使用Set去重
const arr = [1, 1, 23, 3, 4, 5, 3, 4]

const result = Array.from(new Set(arr))

const result2 = [...new Set(arr)]

console.log(result)
console.log(result2)