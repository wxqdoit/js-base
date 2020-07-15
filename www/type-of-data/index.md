# 数据类型
## 【零】基本数据类型
**1. Number**
- 整数
- 小数（浮点数）
- NaN
- Infinity
- -Infinity
```js
var n1 = 100;
var n2 = 13.14;
var n3 = NaN;//1-'a'
var n4 = Infinity;
var n5 = -Infinity;
var n6 = 1 / 0;
console.log(n1, n2, n3, n4, n5, n6);//100 13.14 NaN Infinity -Infinity Infinity
```

- 科学计数法

- 进制表示
```js
var n7 = 0o11;//八进制
var n8 = 0x11;//十六进制
console.log(n7, n8);//9 17
```

**2. String**
- 数字字符串
- 常用方法

**3.undefined**
- undefined 只有一个值即undefined
- undefined 可以表示变量声明了，但未赋值
- undefined 可以表示对象中不存在的引用
- 函数如未指定返回值，则默认返回undefined
```js
var udf;
var udfObj = {};
var udfArr = [];
var udfunc = function () {
};
console.log(udf, udfObj.a, udfArr[1], udfunc());//undefined undefined undefined undefined
console.log(typeof udfObj, typeof udf, typeof udfArr, typeof udfunc());//object undefined object undefined
```

## 2、引用数据类型
