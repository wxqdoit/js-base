//创建接口的三种方式

//1、注释描述

//2、属性检测

//3、鸭式辨型

//接口类
function Interface(name, methods) {
    if (arguments.length !== 2) {
        throw  new Error("arguments error")
    }
    this.name = name;
    this.methods = [];
    for (let i = 1, len = methods.length; i < len; i++) {
        let method = methods[i];
        if (typeof method !== "string") {
            throw new Error("method name must be string")
        }
        this.methods.push(method)
    }
}

Interface.check = function (object) {
    if (arguments.length < 2) {
        throw  new Error("arguments error")
    }
    for (let i = 1, len = arguments.length; i < len; i++) {
        let $interface = arguments[i];
        if ($interface.constructor !== Interface) {
            throw  new Error("constructor of interface error")
        }
        for (let j =0, len = $interface.methods.length; j < len; j++) {
            let methodName =$interface.methods[j] ;
            console.log(methodName);
            if (!object[methodName]) {
                throw  new Error("the method '" + methodName + "' is implemented")
            }else if(typeof object[methodName] !== "function"){
                throw  new Error("the method '"+methodName+"' is not a function")
            }
        }
    }
};

let interface1 = new Interface("interface1", ["say", "run"]);
let interface2 = new Interface("interface2", ["add", "delete"]);

function CompositeImpl() {

}

CompositeImpl.prototype.say = function () {
    console.log("say")
};
CompositeImpl.prototype.run = function () {
    console.log("run")
};
CompositeImpl.prototype.add = function () {
    console.log("add")
};
CompositeImpl.prototype.delete = function () {
    console.log("delete")
};

let c = new CompositeImpl();

Interface.check(c,interface1,interface2);





