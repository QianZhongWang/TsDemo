//泛型约束
function loggingIdentify<T>(args: T): T {
    //这样会报错，要做
    // let length = args.length
    return args
}

//改进
interface Lengthwise {
    length: number
}
function loggingIdentify1<T extends Lengthwise>(args:T):T {
    console.log(args.length);
    return args
}