let Interface = require("../common/Interface");

let carInterface = new Interface("carInterface", ["start", "run", "stop"]);

function CarShop() {

}

CarShop.prototype = {
    constructor: CarShop,
    sellCard: function (type) {
        let car = null;
        switch (type) {
            case "Benz":
                car = new Benz();
                break;
            case "Bwm":
                car = new Bwm();
                break;
            default:
                break;
        }
        Interface.check(car,carInterface);
        return car
    }
};

function Benz() {
    Benz.prototype.start = function () {
        console.log("start");
        return this
    };
    Benz.prototype.run = function () {
        console.log("run");
        return this
    };
    Benz.prototype.stop = function () {
        console.log("stop");
        return this
    }
}

function Bwm() {
}

let carShop = new CarShop();
let benzCar = carShop.sellCard("Benz");
benzCar.start().run().stop();

