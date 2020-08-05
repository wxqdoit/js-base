
//作用域链
let color = "red";
function changeColor() {

    let color2 = "blue";

    function swapColor() {
        let color3 = color2;
        color2 = color;
        color = color3
    }
    swapColor()
}
changeColor();
console.log(color);


//let 块级作用域
for (let i= 0;i<=4;i++){
    console.log(i)
}

/*
js垃圾回收机制：js 中的变量和函数不再使用后，会被自动js垃圾回收机制回收。
形成闭包的条件：有函数/作用域的嵌套；内部函数引用外部函数的变量/参数。
闭包的结果：内部函数的使用外部函数的那些变量和参数仍然会保存，使用return返回了此内部函数，上面的变量和参数不会被回收。
闭包的原因：返回的函数并非孤立的函数，而是连同周围的环境（AO）打了一个包，成了一个封闭的环境包，共同返回出来 ---->闭包。
我们在返回函数的时候，并不是单纯的返回了一个函数，我们把该函数连同他的AO链一起返回了。
函数的作用域，取决于声明时而不取决于调用时。
变量存储function(){}、{}、[]存储的是一个地址。
* */
var var1 = 1

function func1(x) {
    var var1 = x
    return function (x) {
        console.log(var1)
        var1 += x
        console.log("--",var1)
    }
}
let t = func1(50);
t(5)
t(5)
t(50)
