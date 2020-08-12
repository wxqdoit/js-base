//实现继承

//1、原型链

//原型对象 = 构造函数.prototype
//构造函数.prototype.constructor = 构造函数(模板)
//原型对象.isPrototypeOf(实例对象) = true

function Super(name) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name)
    }
}

function Suber() {

}
Suber.prototype = new Super("z3");
console.log(Suber.prototype.constructor);
let sb = new Suber();
console.log(sb.constructor);

sb.sayName()