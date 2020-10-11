/*
* 只读属性
* */
interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = {x: 10, y: 10}
// p1.x = 5

let a:number[] = [1,2,3,4,5]
let ro:ReadonlyArray<number> = a;
// ro[0]=12
// ro.push(5)
// r0.length = 100
// a = ro
//上面代码的最后一行，可以看到就算把整个 ReadonlyArray 赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：
a = ro as number[]