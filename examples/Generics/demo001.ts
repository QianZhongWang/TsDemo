function identity<T>(args: T): T {
    return args
}

//传入泛型变量
let outpyt = identity<string>('myStrings')
let output1 = identity('string')