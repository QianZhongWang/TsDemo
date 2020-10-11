//函数类型
function add(x: number, y: number): number {
    return x + y
}

let myAdd = function (x: number, y: number): number {
    return x + y
}


//函数类型包含参数类型驾返回值类型   (baseValue: number, increment: number) => number
let myAdd1: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
    return x + y
}

//类型推断
let myAdd2 = function (x: number, y: number): number {
    return x + y
}
let myAdd3: (baseValue: number, increment: number) => number = function (x, y) {
    return x + y
}
