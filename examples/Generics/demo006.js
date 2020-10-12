//泛型约束
function getProperty(obj, key) {
    return obj[key];
}
var myObj = { a: 1, b: '2', c: { c: 2 } };
var value1 = getProperty(myObj, "a");
var value2 = getProperty(myObj, "c");
// let value3 = getProperty(myObj,d)
