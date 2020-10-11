// function greeter (person:string) {
//     return 'Hello, ' + person
// }
//
// let user = 'Qianzw'
//
// console.log(greeter(user))
//---------------------------------接口类型
// interface Person{
//     firstName:string
//     laseName:string
// }
// function greeter(person:Person){
//     return `hello${person.firstName} ${person.laseName}`
// }
// let user = {
//     firstName:'Qian',
//     laseName:'zw'
// }
// console.log(greeter(user))
//-------------------------------类
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return "hello " + person.firstName + person.lastName;
}
var user = new User('Qian', 'ZW');
console.log(greeter(user));
