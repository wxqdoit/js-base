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
function factory(name,age) {
    let obj = {};
    obj.name = name;
    obj.age = age;
    return obj
}

let f1 = factory("张三",12);
let f2 = factory('李四',13);
console.log(f1.age,f2.age);//12 13

//2、构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name)
    }
}
let p1 = new Person("张三",12);
let p2 = new Person('李四',13);
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
let p3 = new Person("w5",22);
//2、当做函数去使用
Person("Z6",35);
console.log(name);//Z6
//3、在另外一个对象的作用域中去使用 call/apply
function Animal(){}
let a1 = new Animal();
let a2 = new Animal();
Person.call(a1,'z9',33);
Person.apply(a2,['s111',33]);
console.log(a1);//Animal { name: 'z9', age: 33, sayName: [Function] }
console.log(a2);//Animal { name: 's111', age: 33, sayName: [Function] }






