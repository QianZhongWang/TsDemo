//泛型类
class GenericNumber<T> {
    zeroVale: T
    add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroVale = 0
myGenericNumber.add = (x, y) => {
    return x + y;
}
let stringNumberC = new GenericNumber<string>()
stringNumberC.zeroVale = ''
stringNumberC.add = (x, y) => {
    return x + y
}
