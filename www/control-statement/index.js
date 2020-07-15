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
}else if (a !== b) {
    console.log(true)
}
if (a1 == b) {
    console.log(true)
}

//三目运算
var i_love_you = 'yes';
var you_love_me = 'yes';
let isTureLove = i_love_you === you_love_me ? true : false;
console.log(isTureLove);//true

//for循环
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j < i+1; j++) {
        console.log(i+'*'+j +'='+ i*j)
    }
}

//for in
let  wifi = ['爱蜜莉雅','蕾姆','mayumi'];
for (let item in wifi) {
    console.log(wifi[item]);
    // 爱蜜莉雅
    // 蕾姆
    // mayumi
    switch (wifi[item]) {
        case '蕾姆':
            console.log("no");
            break;
        case '爱蜜莉雅':
            console.log("no");
            break;
        case 'mayumi':
            console.log("yes!");
            break;
        default:
            break;
    }
}

// let TrumpDead = true;
// while (TrumpDead){
//     console.log('世界和平！！！')
// }
let yy = 4>>1 ;//0100-->00010
let _yy = -4>>>1 ;//无符号右移 2147483646
//整数占32位，-4：先将4的二进制原码按位取反得到反码，再加1得到补码，即为相反数。
let inverse = (~ 4 + 1 )>>>1;//2147483646
console.log(yy,_yy,inverse);//2 2147483646 2147483646



//引用类型
//1、数组


