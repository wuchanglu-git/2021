//模拟实现一个UI控件
// 类思想模式
(() => {
    function Widget(width, height) {
        this.width = width
        this.height = height
        this.$elem = null
        console.log('执行了Widget的new')
    }
    Widget.prototype.init = function (elem) {
        this.$elem = elem
        //...
        console.log('执行了Widget的init')
    }
    Widget.prototype.render = function () {
        //渲染的代码
        console.log('执行了Widget的render')
    }
    function Button(width, height, type) {
        Widget.call(this, width, height)
        this.type = type
    }
    Button.prototype = Object.create(Widget.prototype, {
        construct: {
            enumerable: false,
            value: Button
        }
    })
    Button.prototype.init = function (elem, anotherProps) {
        Widget.prototype.init.call(this, elem)
        this.anotherProps = anotherProps
    }
    Button.prototype.render = function () {
        Widget.prototype.render.call()
        console.log('Button 的render')
    }
    const btn = new Button(100, 50, 'normal')
    btn.init('elem', 'anthore')
    btn.render()
    console.log(btn.construct)
})();
console.log('分割线----------------------');
// 对象关联风格
(() => {
    const Widge = {
        init: function (height, width, elem) {
            this.height = height
            this.width = width
            this.$elem = elem
            console.log('执行了Widget的init')
        },
        build: function () {
            console.log('执行了Widget的build')
        }
    }
    let Button = Object.create(Widge)
    Button.setup = function (height, width, elem, type) {
        this.init(height, width, elem)
        this.type = type
        console.log('执行了Button的setup')
    }
    Button.render = function () {
        this.build()
        console.log('执行了Button的render')
    }
    const btn = Object.create(Button)
    btn.setup('height', 'width', 'elem', 'type')
    btn.render()
    console.log(btn)
})();