/*
* 类的存取器
* */
let passcode = 'secret passcode'

class Employee {
    private _fullName: string
    get fullName(): string {
        return this._fullName
    }

    set fullName(newName:string) {
        if (passcode === 'secret passcode') {
            this._fullName = newName
        } else {
            console.log('密码错误')
        }
    }
}

let employee = new Employee()
employee.fullName = 'jack'
if(employee.fullName){
    console.log(employee.fullName)
}