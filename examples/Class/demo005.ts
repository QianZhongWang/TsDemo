class Person {
    protected name:string
    protected constructor(name:string) {
        this.name = name
    }
}
class Employee extends  Person{
    private department:string
    constructor(name:string,department:string) {
        super(name);
        this.department = department
    }
    getElevatorPitch(){
        return `hello my name is ${this.name} and I work in ${this.department}`
    }
}
let howard = new Employee('howard','Sales')
console.log(howard.getElevatorPitch())
// console.log(howard.name)
// let jhon = new Person('jhon')