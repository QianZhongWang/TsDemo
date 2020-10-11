/*
* 类的继承复杂例子*/

class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`)
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distance: number = 5) {
        console.log('吱吱吱')
        super.move(distance)
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distance: number = 30) {
        console.log('驾驾驾')
        super.move(distance)
    }
}

let sam = new Snake('sammy')
let tom = new Horse('tommy')
sam.move()
tom.move()