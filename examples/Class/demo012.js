/*
* 类的一些高级技巧
* */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello " + this.greeting;
    };
    Greeter.standardGreeting = 'hello,there';
    return Greeter;
}());
var greeter;
greeter = new Greeter('world');
console.log(greeter.greet());
//--------------------------------------------------
var Greeter1 = /** @class */ (function () {
    function Greeter1(message) {
        this.greeting = message;
    }
    Greeter1.prototype.greet = function () {
        if (this.greeting) {
            return "hello " + this.greeting;
        }
        else {
            return Greeter1.standardGreeting;
        }
    };
    Greeter1.standardGreeting = 'hello,there';
    return Greeter1;
}());
var greeter1;
greeter1 = new Greeter1();
console.log(greeter.greet());
//-------------------------------------------------------
var greeterMaker = Greeter1;
greeterMaker.standardGreeting = '修改静态属性';
var greeter2 = new Greeter1();
console.log(greeter2.greet());
console.log(greeter.greet());
