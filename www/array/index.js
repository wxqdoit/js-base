//数组

//1、给数组定义长度没有意义，其长度可以任意改变
//2、数组元素可以是任意类型

var arr = [];
var arr1 = new Array(10);
var arr2 = [1, 3, 4, 5, new Date(), false];
console.log(arr2);//[ 1, 3, 4, 5, 2020-07-12T12:25:07.759Z, false ]


//数组常用方法
//push:向数组追加元素, 改变原数组，返回值为新数组的长度
var arr3 = [];
let len1 = arr3.push("ha", 'h', 2, 3, 222);
console.log(len1, arr3);//5 [ 'ha', 'h', 2, 3, 222 ]


//pop:从数组尾部移除一个元素，改变原数组，返回值为移除的元素
var val = arr3.pop();
console.log(val, arr3);//222 [ 'ha', 'h', 2, 3 ]


//shift:从头部移除一个元素，改变原数组，返回移除的元素
var _shift = arr3.shift();
console.log(_shift, arr3);//ha [ 'h', 2, 3 ]


//unshift:从头部插入元素，改变原数组，返回新数组的长度
var _unshitf = arr3.unshift(88, 99);
console.log(_unshitf, arr3);//5 [ 88, 99, 'h', 2, 3 ]

//splice:截取/追加，改变原数组，返回截取的数组
/**
 * 1 起始位置 默认0
 * 2 截取个数，默认一个
 * 3- 追加的新元素
 */
var arr4 = [1, 2, 3, 4, 5, 6, 7];
var _splice = arr4.splice(1, 2, 111, 222);
var _splice1 = arr4.splice();
console.log(_splice, _splice1, arr4);//[ 2, 3 ] [] [1,111,222,4,5,6,7]


//slice：截取数组，不改变原数组，返回截取的数组
/**
 * 1 截取开始位置（默认0）
 * 2 截取结束位置（默认数组长度）
 */
var _slice = arr4.slice(0,);
var _slice1 = arr4.slice(0, 1);
console.log(_slice, _slice1, arr4);

//concat:连接多个数组（不操作数组本身），返回连接后的数组
var arr5 = [1, 2];
var arr6 = [4, 5];
var arr7 = [6, 7];
let _concat = arr5.concat(arr6, arr7);
console.log(arr5, arr6, _concat);//[ 1, 2 ] [ 4, 5 ] [ 1, 2, 4, 5, 6, 7 ]


//join：在每隔元素之间加入内容（不操作数组本身）,返回加入内容后字符串
var _join = arr7.join("----");
console.log(_join, arr7);//6----7 [ 6, 7 ]

//sort:排序
//默认 ：元素按ASCII字符升序排序。
//改变原数组
//返回改变后的数组
var arr8 = [3, 4, 101, 8, 1, 3];
var _sort = arr8.sort(sortOpt);
console.log(_sort, arr8);//[ 1, 3, 3, 4, 8, 101 ] [ 1, 3, 3, 4, 8, 101 ]
function sortOpt(a, b) {
    return a < b ? -1 : 1
}

//reverse:反转数组中的元素。
//改变原数组 返回反转后的数组
var arr9 = [1, 2, 3, "QAQ", "wtf"];
var _reverse = arr9.reverse();
console.log(arr9, _reverse);//[ 'wtf', 'QAQ', 3, 2, 1 ] [ 'wtf', 'QAQ', 3, 2, 1 ]

//-------------es5 arr func-----------------
//indexOf lastIndexOf（从后往前找）
//只传入1个参数的时候表示需要查询的值，该值在数组中的索引，如果没有返回-1
//该方法在比较的时候，使用严格相等比较 ===
//传入两个参数的时候,第一个参数表示起始位置，第二个表示要查询的值如果没有返回-1
var arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var _indexOf1 = arr10.indexOf(1);
var _indexOf2 = arr10.indexOf(1, 3);
console.log(_indexOf1, _indexOf2, arr10);

//数组迭代

//every:确定数组的所有元素是否满足指定的条件。相当于&&
// 不改变原数组
// 当所有元素的测试都满足时，返回true，否则返回false
let _every = arr10.every(function (value, index, array) {
    return value < 8
});
console.log(_every, arr10);//false [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//some:确定数组的部分元素是否满足指定的条件。相当于||
// 不改变原数组
// 当有一个元素都满足条件时，就返回true，否则返回false
let _some = arr10.some(function (value, index, array) {
    return value > 8
});
console.log(_some, arr10);//true [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//map 在数组的每个元素上调用已定义的回调函数，并返回包含结果的数组。
// 不改变原数组
var _map = arr10.map(function (value, index, array) {
    return value * index
});
console.log(_map, arr10);//[ 0, 2, 6, 12, 20, 30, 42, 56, 72, 90 ] [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//filter 返满足条件的元素
// 不改变原数组
var _filter = arr10.filter(function (value, index, array) {
    return value * index > 20
});
console.log(_filter, arr10);//[ 6, 7, 8, 9, 10 ] [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//forEach 遍历数组的每一项
//不改变原数组
//无返回值、undefined
var _forEach = arr10.forEach(function (value, index, array) {
    return value * index
});
console.log(_forEach, arr10);//undefined [1, 2, 3, 4,5,6, 7, 8, 9, 10]


//reduce/reduceRight 为数组中的所有元素调用指定的回调函数。 回调函数的返回值是计算累加结果，并在下一次对回调函数的调用中作为参数提供。
//initialValue如果指定了initialValue，它将用作启动累积的初始值。 首次调用callbackfn函数将提供此值作为参数，而不是数组值。
//不改变原数组

var _reduce = arr10.reduce(function (p, c, n, a) {
    return c - p
});
var _reduce1 = arr10.reduce(function (p, c, n, a) {
    return c - p
}, 3);
var _reduce2 = arr10.reduceRight(function (p, c, n, a) {
    return c - p
});
console.log(_reduce, _reduce1, _reduce2, arr10);//5 8 -5 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]



