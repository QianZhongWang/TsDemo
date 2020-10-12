function identity<T>(args: T): T {
    return args
}

//泛型变量
function loggingIdentity<T>(args: T[]): T[] {
    let length = args.length;
    console.log(length)
    return args
}