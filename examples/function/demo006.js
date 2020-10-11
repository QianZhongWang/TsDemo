var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        this.onClickBad = function (e) {
            _this.type = e.type;
            console.log(_this.type);
        };
    }
    return Handler;
}());
var h = new Handler();
var uiElement = {
    addClickListener: function (onclick) {
    }
};
uiElement.addClickListener(h.onClickBad);
