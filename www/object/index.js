// Object
// 所有类的基础类


// 实例化对象
let object = new Object();
let obj = {};

// 设置属性
obj.name = '法外狂徒张三君';
obj.age = 23;
obj['type'] = '单身狗';
obj.steal = function () {
    console.log("get something")
};

// 调用属性、方法
console.log(obj.name);//法外狂徒张三君
console.log(obj.age);//23
obj.steal();//get something

// 删除对象的属性、方法：
let book = {
    page: 2233,
    price: 20,
    cbs: 'buKe',
};
console.log(book);//{ page: 2233, price: 20, cbs: 'buKe' }
delete book.cbs;
console.log(book);//{ page: 2233, price: 20 }

//对象遍历 for in
let word = {
    wd1: '回首掏',
    wd2: '哟，鬼刀一开看不见',
    wd3: '走位走位',
    wd4: '手里干，哟，难受'
};
for (let item in word) {
    console.log(word[item])
    // 回首掏
    // 哟，鬼刀一开看不见
    // 走位走位
    // 手里干，哟，难受
}

//constructor，对象的构造器（构造函数）
let nullObj = {};
console.log(nullObj.constructor);//[Function: Object]
let nullArr = [];
console.log(nullArr.constructor);//[Function: Array]

//hasOwnProperty(string)，检测对象是否拥有某个属性
let computer = {
    cpu: '3900x',
    gpu: "gtx2080TI"
};
//param: property name
let r1 = computer.hasOwnProperty('cpu');
let r2 = computer.hasOwnProperty('mem');
console.log(r1, r2);//true false

// isPrototypeOf(Object)，检查该对象是否是传入对象的原型
let objProtoPer = {
    name: '曹孟德',
    motto: '吾好他人之妻',
};
let Person = Object.create(objProtoPer);
let r3 = objProtoPer.isPrototypeOf(Person);
console.log(r3);//true

function CC (){}

CC.prototype = {

};
let c1 = new CC();

console.log("-----",c1.constructor);


// propertyIsEnumerable，检查属性是否可被枚举（for in）能遍历
let phone = {
    name: 'xxx',
    size: 'xxx',
};
console.log(phone.propertyIsEnumerable('constructor')); //false
console.log(phone.propertyIsEnumerable('name')); //true


/**
 * 模拟实现 localStorage
 */
//LocalStorage 类
function LocalStorage() {
    //存储数据的Object
    this.localStorage = {};
    //存储长度
    this.length = 0;
    //设置数据
    this.setItem = function (key, value) {
        this.localStorage[key] = value.toString();
        this.updateLength()
    };
    //根据key获取数据
    this.getItem = function (key) {
        if (this.localStorage.hasOwnProperty(key)) {
            return this.localStorage[key]
        }
    };
    //清除所有数据
    this.clear = function () {
        this.localStorage = {};
        this.updateLength()
    };
    //更加key移除数据
    this.removeItem = function (key) {
        if (this.localStorage.hasOwnProperty(key)) {
            delete this.localStorage[key];
            this.updateLength()
        }
    };
    //更新数据项长度
    this.updateLength = function () {
        let count = 0;
        for (let item in this.localStorage) {
            count++
        }
        this.length = count
    };
}
let store = new LocalStorage();
store.setItem("name", "张三");
store.setItem("age", "23");
store.setItem("event", {});
console.log(store.localStorage, store.length);
//{ name: '张三', age: '23', event: '[object Object]' } 3

store.removeItem("age");
console.log(store.localStorage, store.length);
//{ name: '张三', event: '[object Object]' } 2

console.log(store.getItem("event"));
//[object Object]

store.clear();
console.log(store.localStorage);//{}




let arr = [1,2,3,3,4,1,4,5,7,8,2,78,9,10] ;
//对象的键是唯一的，利用这个属性数组去重
function deduplication(arr) {
    //定义一个空对象存数据
    let arrObj = {};
    //将对象转数组
    let _arr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        arrObj[arr[i]] = arr[i]
    }
    for (let item in arrObj) {
        if (arrObj.hasOwnProperty(item)) {
            _arr.push(item)
        }
    }
    return _arr
}
console.log(deduplication(arr));



