/**
 * 控制语句和运算符
 */
// if else if
// 数据类型自动转换
// == 表示值相等
// === 表示值和类型都相等
var a = 1;
var a1 = '1';
var b = true;
if (a == b) {
    console.log(true)
}
if (a !== b) {
    console.log(true)
}
if (a1 == b) {
    console.log(true)
}

//三目运算
var i_love_you = true;
var you_love_me = true;
let isTureLove = i_love_you === you_love_me ? true : false;
console.log(isTureLove);//true

//for循环
//特点：
//

for (var i = 1; i <= 9; i++) {
    for (var j = 1; j < i+1; j++) {
        console.log(i+'*'+j +'='+ i*j)
    }
}
for(;;){
}


while (true){

}

//引用类型
//1、数组


