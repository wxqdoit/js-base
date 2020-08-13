//实现继承


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
sb.sayName();




//1、原型继承
//继承父类的实例对象、父类的原型对象
/*
function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.id = 11;
function Boy(sex) {
    this.sex = sex
}
Boy.prototype = new Person("z2",23);
let b = new Boy('n');
console.log(b.name);
console.log(b.id);
*/

//2、类继承（构造函数方式/call/apply）
/*

function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.id = 11;

function Boy(name, age, sex) {
    Person.call(this,name, age);
    this.sex = sex
}
let b = new Boy("z2",23,'n');
console.log(b.id);//undefined 父类的原型对象不会继承

*/

//混合继承 （原型继承+类继承）
function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.id = 11;
Person.prototype.sayAge= function () {
    console.log(this.age+'----')
};

function Boy(name, age, sex) {
    //使用call、apply做到继承父类的实例模板效果
    Person.call(this,name, age);
    this.sex = sex
}
//不传参 只继承父类的原型对象
Boy.prototype =  new Person();
let b = new Boy("z2",23,'n');
b.sayAge();


function extend(sub,sup) {
    let F = new Function();
    F.prototype = sup.prototype;
    sub.prototype = new F();
    sub.prototype.constructor = sub;
    sub.superClass = sup.prototype.constructor;
    if(sup.prototype.constructor === Object.prototype.constructor){
        sup.prototype.constructor = sub
    }
}

function Animal(name,voice) {
    this.name = name;
    this.voice = voice;
}
Animal.prototype.bray = function () {
    console.log(this.voice)
};

function Cat(name,voice,gender) {

    Cat.superClass.constructor.call(this,name,voice);
    this.gender = gender;
    this.voice = voice;
    this.getGender = function(){
        console.log("gender:::"+this.gender);
    }
}
extend(Cat,Animal);
let c = new Cat("果冻","喵喵喵","母");
c.bray();
c.getGender();