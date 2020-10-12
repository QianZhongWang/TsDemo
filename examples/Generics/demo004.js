//泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroVale = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var stringNumberC = new GenericNumber();
stringNumberC.zeroVale = '';
stringNumberC.add = function (x, y) {
    return x + y;
};
