//返回一个绑定了软绑定了this的函数（只防止函数调用时使用默认绑定规则）,外加了函数的柯里化
Function.prototype.softBind = function (target) {
    const fn = this
    const curried = [].slice.call(arguments, 1)
    const returnFn = function () {
        const bindThis = (!this || this === window) ? target : this
        return fn.apply(bindThis, curried.concat(arguments))
    }
    returnFn.prototype = Object.create(fn.prototype)
    return returnFn
}
// 给目标对象添加@@iterator内部属性使之可以使用for of进行遍历
function addIterator(target) {
    Object.defineProperty(target, Symbol.iterator, {
        configurable: true,
        writable: false,
        enumerable: false,
        value: function () {
            let index = 0
            const self = this
            const keys = Object.keys(this)
            return {
                next: () => ({
                    value: self[keys[index]],
                    done: ++index > keys.length
                })
            }
        }
    })
}