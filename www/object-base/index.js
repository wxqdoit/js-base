//对象
let obj = new Object();
obj.name = "wang";
obj.age = 22;
obj.study = function () {
    console.log("study")
};
obj.study();//study


//面向对象模拟

//1、工厂模式
function factory(name, age) {
    let obj = {};
    obj.name = name;
    obj.age = age;
    return obj
}

let f1 = factory("张三", 12);
let f2 = factory('李四', 13);
console.log(f1.age, f2.age);//12 13

//2、构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name)
    }
}

let p1 = new Person("张三", 12);
let p2 = new Person('李四', 13);
p1.sayName();//张三
p2.sayName();//李四

//constructor
//判断一个对象的构造器
console.log(p1.constructor);//[Function: Person]
console.log(p2.constructor);//[Function: Person]

//instanceof
//判断实例
console.log(typeof p1);//object
console.log(p1 instanceof Person);//true
console.log(p1 instanceof Object);//true

//对象的使用
//1、当做构造函数使用（类）
let p3 = new Person("w5", 22);
//2、当做函数去使用
//Person("Z6", 35);
//console.log(name);//Z6
//3、在另外一个对象的作用域中去使用 call/apply
function Animal() {
}

let a1 = new Animal();
let a2 = new Animal();
Person.call(a1, 'z9', 33);
Person.apply(a2, ['s111', 33]);
console.log(a1);//Animal { name: 'z9', age: 33, sayName: [Function] }
console.log(a2);//Animal { name: 's111', age: 33, sayName: [Function] }

//原型常用对象

//使用原型模拟数组each方法
//es5 forEach 方法 适合遍历一维数组
Array.prototype.curEach = function (fn) {
    try {
        if (this.length !== 0 && this.constructor === Array && fn.constructor === Function) {
             this.i || (this.i = 0);
             while (this.i<this.length){
                 let data = this[this.i];
                 if(data.constructor === Array){
                     data.curEach(fn);
                 }else {
                     fn.call(null,data)
                 }
                 this.i ++
             }
            this.i = null;
            return this
        } else {
            return this
        }
    } catch (e) {
        console.log(e)
    }
};

let arr = [1, 2, 3, 4, [5, [6, [7]]]];
arr.curEach((item) => {
    console.log(item)
});

//简单原型的使用


function Person1() {
}

Person1.prototype = {
    constructor:Person1,
    name:'zz'
};
// Object.defineProperty(Person1.prototype,"constructor",{
//     enumerable:false,
//     value:Person1
// });
let _p1 = new Person1();
console.log(_p1.constructor);
for(let item in Person1.prototype){
    console.log(item)
}




