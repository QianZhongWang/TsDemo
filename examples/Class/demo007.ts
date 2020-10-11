/*
* 参数属性
* */
class Person {
    constructor(readonly name:string) {

    }
}
let john = new Person('jhon')
console.log(john.name)
