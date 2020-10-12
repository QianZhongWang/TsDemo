//泛型约束

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
let myObj = {a:1,b:'2',c:{c:2}}
let value1 = getProperty(myObj,"a")
let value2 = getProperty(myObj,"c")
// let value3 = getProperty(myObj,d)