
//返回一个绑定了软绑定了this的函数（只防止函数调用时使用默认绑定规则）,外加了函数的柯里化
Function.prototype.softBind=function(target){
    const fn=this
    const curried=[].slice.call(arguments,1)
    const returnFn=function(){
        const bindThis=(!this||this===window)?target:this
        return fn.apply(bindThis,curried.concat(arguments))
    }
    returnFn.prototype=Object.create(fn.prototype)
    return returnFn
}
console.log('dwqdwq撒打算')
console.log(2)