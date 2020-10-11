/*
* 类的一些高级技巧
* */
class Greeter {
    static standardGreeting = 'hello,there'
    greeting: string

    constructor(message: string) {
        this.greeting = message
    }

    greet() {
        return `hello ${this.greeting}`
    }
}

let greeter: Greeter
greeter = new Greeter('world')
console.log(greeter.greet())



//--------------------------------------------------
class Greeter1 {
    static standardGreeting = 'hello,there'
    greeting: string

    constructor(message?: string) {
        this.greeting = message
    }

    greet() {
        if (this.greeting) {
            return `hello ${this.greeting}`
        } else {
            return Greeter1.standardGreeting
        }
    }
}

let greeter1: Greeter1
greeter1 = new Greeter1()
console.log(greeter.greet())



//-------------------------------------------------------
/*
* typeof Greeter1，意思是取 Greeter1 类的类型，而不是实例的类型。或者更确切的说，"告诉我 Greeter1 标识符的类型"，也就是构造函数的类型。
*  这个类型包含了类的所有静态成员和构造函数。 之后，就和前面一样，我们在 greeterMaker 上使用 new，创建 Greeter 的实例。
* */
let greeterMaker:typeof Greeter1 = Greeter1
greeterMaker.standardGreeting = '修改静态属性'

let greeter2:Greeter1 = new Greeter1()
console.log(greeter2.greet())
console.log(greeter.greet())