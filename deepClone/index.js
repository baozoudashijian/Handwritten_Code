function deepClone() {
    // string number boolean undefined null symbol bigint object
    if(a instanceof Object) { // 分数据类型
        let result = undefined
        if(a instanceof Function) {
            if(a.prototype) { // 区分箭头函数还是普通函数
                result = function() { return a.apply(this, arguments) } // 拷贝函数
            }
        }
    } else {

    }
}