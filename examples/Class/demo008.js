/*
* 类的存取器
* */
var passcode = 'secret passcode';
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode === 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log('密码错误');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = 'jack';
if (employee.fullName) {
    console.log(employee.fullName);
}
