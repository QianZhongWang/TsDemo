//函数类型的签名接口
interface SearchFunc{
    (source:string,subString:string):boolean
}
let mySearch:SearchFunc
mySearch=function (sec,sub):boolean {
    let result = sec.search(sub)
    return result>-1
}