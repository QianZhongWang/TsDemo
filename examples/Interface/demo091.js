// 什么时候使用构造器接口，什么时候使用实例接口？
//构造函数
function createClock(constructor, hour, minute) {
    return new constructor(hour, minute);
}
//电子时钟
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('电子时钟');
    };
    return DigitalClock;
}());
//指针时钟
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('指针时钟');
    };
    return AnalogClock;
}());
//实例化类
var digital = createClock(DigitalClock, 12, 1);
var analog = createClock(AnalogClock, 7, 12);
