//接口继承

//1 继承1个

// interface Shape {
//     color: string
// }
//
// interface Square extends Shape {
//     slideLength: number
// }
//
// let square = {} as Square
// square.color = 'blue'
// square.slideLength = 10


//2 继承多个接口

interface Shape {
    color: string
}

interface PenStroke {
    penWidth: number
}

interface Square extends Shape, PenStroke {
    slideLength: number
}

let square = {} as Square
square.color = 'blue'
square.slideLength = 10
square.penWidth = 5.0
