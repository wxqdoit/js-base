module.exports =  class Extend {
    static extend (sub,sup){
        let F = new Function();
        F.prototype = sup.prototype;
        sub.prototype = new F();
        sub.prototype.constructor = sub;
        sub.superClass = sup.prototype.constructor;
        if(sup.prototype.constructor === Object.prototype.constructor){
            sup.prototype.constructor = sub
        }
    }
}