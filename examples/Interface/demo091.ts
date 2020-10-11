// 什么时候使用构造器接口，什么时候使用实例接口？

//实例接口
interface ClockInterface {
    tick()
}

//构造器接口
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface
}

//构造函数
function createClock(constructor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new constructor(hour, minute)
}

//电子时钟
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log('电子时钟')
    }
}

//指针时钟
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log('指针时钟')
    }
}

//实例化类
let digital = createClock(DigitalClock, 12, 1)
let analog = createClock(AnalogClock, 7, 12)





