function identify<T>(args: T): T {
    return args
}

//泛型类型
let myIdentify: <T>(args: T) => T = identify

//对象字面量或则泛型接口
interface DefineIdentify {
    <T>(args: T): T
}

let myIdentify1: DefineIdentify = identify
let myIdentify2: { <T>(args: T): T } = identify

//-------------------------------
// 推荐使用
interface DefineIdentify2<T> {
    (args: T): T
}
let myIdentify3:DefineIdentify2<number> = identify