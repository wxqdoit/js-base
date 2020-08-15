//链式编程
function Cat() {
    this.say = function () {
        return this
    };
    this.run = function () {
        return this
    };
    this.dance = function () {
        return this
    };
}

let c = new Cat();
c.run().run().run().dance();

(function (window) {
    let _$ = function (selector) {
        if(typeof selector !== 'string'){
            throw new Error("selector error")
        }
        let idReg = new RegExp(/#\w+/);
        let idSelector = selector.match(idReg);
        if(idSelector){
            this.dom = document.querySelector(selector);
        }
    };
    _$.prototype = {
        constructor: _$,
        setStyle:function (prop,value) {
            this.dom.style[prop] = value;
            return this
        },
        addEvent:function (eventName,fn) {
            if(window.addEventListener){
                this.dom.addEventListener(eventName, fn);
                return this
            }
            if(window.attachEvent){
                this.dom.attachEvent("on"+eventName, fn);
                return this
            }
        }
    };
    window.$ = new _$()
})(window);