//交叉类型 将多个类型混合成一个类型
function extend<T, U>(first: T, second: U): T & U {
    let result = {} as T & U
    for (let id in first) {
        result[id] = first[id] as any
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id] as any
        }

    }
    return result
}

class Person {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

interface Loggable {
    log(): void
}

class ConsoleLog implements Loggable {
    log() {
    }
}

let jim = extend(new Person('jim'), new ConsoleLog())
console.log(jim.name)
jim.log()
