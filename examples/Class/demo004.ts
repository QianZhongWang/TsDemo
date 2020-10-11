/**
 * 类的修饰符
 * */
class Animal {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`)
    }
}


class Rhino extends Animal {
    constructor() {
        super('Rhino');
    }
}

class Employee {
    private name: string

    constructor(name: string) {
        this.name = name
    }
}

let animal = new Animal('Goat')
let rhino = new Rhino()
let employee = new Employee('Bob')
// rhino = animal
// animal = rhino
// animal = employee