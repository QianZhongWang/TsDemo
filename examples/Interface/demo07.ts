//可索引的类型

/*
* 数字签名
* */
// interface StringArray {
//     [index: number]: string
// }
//
// let myArray: StringArray
// myArray = ['Bob', 'Fred']
// let myStr: string = myArray[0]
// console.log(myStr)

//字符串和数字签名
class Animal {
    name: string
}

class Dog extends Animal {
    breed: string
}
interface NotOkay{
    [x:number]:Dog
    [x:string]:Animal
}
