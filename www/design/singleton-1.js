//singleton

//1、简单单体
let singleton1 = {
    a: 1,
    b: 2,
    say:function(){
        console.log(this.a)
    }
};
singleton1.say();

//2、闭包单体
let singleton2 = (function () {
    let a = 2;
    let b = 2 ;
    let say = function () {
        console.log(a)
    };
    return{
        a1 : this.a,
        b1 : b,
        f1 :function () {
            console.log(this.a1)
        }
    }
})();
singleton2.a1 = 1;
singleton2.f1();

//3、惰性单体
let singleton3 = (function () {
    let instance;
    let init = function () {
        let a = 2;
        let b = 2 ;
        let say = function () {
            console.log(a)
        };
        return{
            a1 : a,
            b1 : b,
            f1 :function () {
                console.log(a)
            }
        }
    };
    return {
        getInstance :function () {
            if(!instance){
                instance = init()
            }
            return instance
        }
    }
})();
singleton3.getInstance().f1();

//4、分支单体