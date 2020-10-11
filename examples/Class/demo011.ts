/*
* 抽象类
* */
abstract class Department {
    name: string

    protected constructor(name: string) {
        this.name = name
    }

    printName(): void {
        console.log(`department name is ${this.name}`)
    }

    abstract printMeeting(): void
}

class AccountingDepartment extends Department{
    constructor() {
        super('Accounting ad Auditing');
    }
    printMeeting():void {
        console.log('The Accounting department meets each monday at 10am')
    }
    reports():void{
        console.log('generating accounting reports...')
    }
}

let department:Department
// department = new Department()
//抽象类不可以被实例化，但是派生类是可以的
department = new AccountingDepartment()
department.printMeeting()
department.printName()