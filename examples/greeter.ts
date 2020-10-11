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
class User {
    firstName: string
    lastName: string
    fullName: string
    constructor( firstName: string,lastName: string ) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + ' ' +lastName
    }
}

interface Person{
    firstName: string
    lastName: string
}

function greeter(person:Person){
    return `hello ${person.firstName}${person.lastName}`
}

let user = new User('Qian','ZW');
console.log(greeter(user))
