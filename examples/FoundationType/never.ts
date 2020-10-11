/*never 类型表示的是那些永不存在的值的类型。
 * 例如， never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never 类型，当它们被永不为真的类型保护所约束时。
 * never 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 never 的子类型或可以赋值给never 类型（除了 never 本身之外）。 即使 any 也不可以赋值给 never。
 * */



/*返回never的函数必须存在无法达到的终点*/
function error(message:string):never {
    throw new Error(message)
}

/*推断返回值为never*/
function fail():never {
    return error('something failed')
}


// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true){

    }
}