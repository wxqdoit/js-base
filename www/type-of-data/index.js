/**
 * 1、变量
 */
// 命名规则：
// 字母下划线或$开头
// 不能使用空格
// 不能使用保留字与关键词命名(具体有哪些？)
// 全局变量：在方法外部声明的变量、方法内不使用关键字定义的变量
// 局部变量：在方法内部声明的变量
var _var = "_var";
var $var = "$var";
var num = 2;
console.log(_var, $var, num);//_var $var 2

function func1() {
    var num = 3;//局部变量
    console.log(num)//3
}

function func2(num) {
    num = 3;
    num1 = 1;//方法内部创建的全局变量
    console.log(num)//3
}

func1(num);
func2();
// 先执行func2才会创建num1
console.log(num1);//1

const A = {
    b :1,
};
A.b = 3;
console.log(A.b );//3
A = 1;//TypeError: Assignment to constant variable.
const cl = 2;
cl = 1;//TypeError: Assignment to constant variable.

/**
 * 数据类型：基本数据类型 引用数据类型
 */

// 基本数据类型：number
// 整数、小数（最高精度17位）
// 八进制(Octal) 十六进制(Hex) 不能字面表示二进制
var n1 = 100;
var n2 = 13.14;
var n3 = NaN;//1-'a'
var n4 = Infinity;
var n5 = -Infinity;
var n6 = 1 / 0;
console.log(n1, n2, n3, n4, n5, n6);//100 13.14 NaN Infinity -Infinity Infinity
var n7 = 0o11;//八进制
var n8 = 0x11;//十六进制
console.log(n7, n8);//9 17
var n9 = 0.111111111112345678;
var n10 = 1 - 'a';
var n11 = parseInt("abc123");
var n12 = parseInt("123abc");
console.log(n9, n10, n11, n12);//0.11111111111234567 NaN NaN 123

//基本数据类型：undefined
//undefined 只有一个值undefined
//undefined 表示变量声明了，但未赋值
//常见undefined：对象中不存在的引用，
var udf;
var udfObj = {};
var udfArr = [];
var udfunc = function () {
};
console.log(udf, udfObj.a, udfArr[1], udfunc());//undefined undefined undefined undefined
console.log(typeof udfObj, typeof udf, typeof udfArr, typeof udfunc());//object undefined object undefined

//基本数据类型：null
// null --> object 表示一个空对象的引用
var _null1 = null;
console.log(_null1);//null

//基本数据类型: string
var str1 = "wtf";
var str2 = "f**k";
console.log(str1, str2);//wtf f**k

//基本数据类型：Boolean
let bool1 = true;
let bool2 = false;
console.log(bool1,bool2);//true false

//引用数据类型:对象
var obj1 = new Object();//{}
obj1.name = "wtf";
var arr1 = new Array();//[]
arr1[0] =1;
var date = new Date();
var reg = new RegExp(/^sdf/);
console.log(obj1,arr1,date,reg);//{name: "wtf"} [1] Sat Jul 11 2020 21:23:41 GMT+0800 (中国标准时间) /^sdf/








