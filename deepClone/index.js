function deepClone(a, cache) {
    if(!cache) {
        cache = new Map() 
    }
    if(cache.get(a)) {
        return cache.get(a)
    }
    // string number boolean undefined null symbol bigint object
    if(a instanceof Object) { // 分数据类型
        let result = undefined
        if(a instanceof Function) {
            if(a.prototype) { // 区分箭头函数还是普通函数
                result = function() { return a.apply(this, arguments) } // 拷贝函数
            } else { // 箭头函数
                result = (...args) => { return a.call(undefined, ...args) }
            }
        } else if(a instanceof Array) {
            result = []
        } else if(a instanceof Date) {
            result = new Date(a - 0)
        } else if(a instanceof RegExp) {
            result = new RegExp(a.source, a.flags)
        } else {
            result = {}
        }
        cache.set(a, result)
        for(let key in a) {
            if(a.hasOwnProperty(key)) {
                result[key] = deepClone(a[key], cache)
            }
        }
        return result
    } else {
        return a
    }
}

// 测试代码
const a = {
    number: 1,
    bool: false,
    str: 'hi',
    empty1: undefined,
    empty2: null,
    array: [
        {name: 'jack', age: 18},
        {name: 'ronger', age: 19}
    ],
    date: new Date(2000, 0, 1, 20, 30, 0),
    regex: /\.(j|t)sx/i,
    object: {name: 'ronger', age: 26},
    f1: (a, b) => a + b,
    f2: function(a, b) { return a + b; }
}

const b = deepClone(a)

/*
 * 第一种情况
 * a = function () {}
 * a.b = function () {}
 *
*/

/*
 * 第二种情况
 * 加一句代码就怂了
 * a.self = a
 *
*/