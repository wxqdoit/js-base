//原型对象里的所有属性和方法  被所有实例化的对象共享
function Person() {

}
Person.prototype = {
    constructor:Person,
    name:'wxq',
    gender:'woman',
    gf:['CuiHua Zhang ','JanGang Li']
};

let p1 = new Person();
let p2 = new Person();

p1.gf.push("XiaoFang Huang");
console.log(p2.gf);//[ 'CuiHua Zhang ', 'JanGang Li', 'XiaoFang Huang' ]

//组合使用原型对象和构造函数，开发常用、JavaScript(es5)类
function NinJa(name, grade, attr, country) {
    this.name = name;
    this.grade = grade;
    this.attr = attr;
    this.country = country
}
NinJa.prototype={
    ninJiaRun:function(){
       console.log("ninJiaRun")
    },
    sayName:function () {
        console.log(this.name)
    },
    getAttr:function(){
        console.log(this.attr)
    }
};
let  n1 = new NinJa('卡卡西','上忍',["雷","火","水"]);
let  n2 = new NinJa('宇智波鼬','S级叛忍',["雷","风","火","水"]);
n1.sayName();//卡卡西
n2.sayName();//宇智波鼬
n1.getAttr();//[ '雷', '火', '水' ]
n2.getAttr();//[ '雷', '风', '火', '水' ]

//动态原型模式 让代码都封装到一起

function Animal(name,gender,gf) {
    this.name = name;
    this.gender = gender;
    this.gf = gf;
    if(typeof this.run !== 'function'){
        Animal.prototype.run = function () {
            console.log(this.name+"----run")
        }
    }
}

let a1 = new Animal('马', '公');
let a2 = new Animal('狗', '母');

a1.run();//马----run
a2.run();
//稳妥构造函数模式 durable object（稳妥对象）非常安全的环境中
//1 没有公共属性 2 不能使用this

function  Book(name,page,price) {
    let obj = {};
    let p = price;
    let n = name;
    obj.getPrice = function () {
        console.log(p)
    };
    obj.getName = function () {
        console.log(n)
    };
    return obj
}

let b1 = new Book("《富婆通讯录》",233,12);
b1.getPrice();
b1.getName();





