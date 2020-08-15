module.exports = class Interface {
    constructor(name, methods) {
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

    static check(object) {
        if (arguments.length < 2) {
            throw  new Error("arguments error")
        }
        for (let i = 1, len = arguments.length; i < len; i++) {
            let $interface = arguments[i];
            if ($interface.constructor !== Interface) {
                throw  new Error("constructor of interface error")
            }
            for (let j = 0, len = $interface.methods.length; j < len; j++) {
                let methodName = $interface.methods[j];
                if (!object[methodName]) {
                    throw  new Error("the method '" + methodName + "' is not implemented")
                } else if (typeof object[methodName] !== "function") {
                    throw  new Error("the method '" + methodName + "' is not a function")
                }
            }
        }
    }
}