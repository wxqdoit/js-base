// Function 类型

// 函数是一种类型：function
// 函数返回值没有类型
// 函数有自己的作用域
// 函数可以嵌套定义
// 使用return 结束函数运行

// 简单定义一个函数
function func() {
    console.log('i am func')//i am func
}

// 执行函数
func();

//三种方式
let fun1 = function (a, b) {

    console.log(arguments.callee, 'fun1')
    console.log(a + b)
};
let _fun1 = fun1;
fun1 = null;
_fun1(1, 2);

function fun2() {
    console.log('fun2')
}

let fun3 = new Function('a', 'console.log(a)');

function fact(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * fact(num - 1)
    }
}

let d = fact(5)
console.log(d)

//this对象指的是在运行时基于执行环境所绑定的
//总是指向调用者
let k = 10;

let test = () => {
    console.log(this.k)
    this.k = 20
    console.log(this.k)

}
test();


function Obj() {
    this.a = 10;
    this.b = 20
}

function impl() {
    return this.a + this.b
}

console.log(impl());
console.log(impl.call(new Obj()));







