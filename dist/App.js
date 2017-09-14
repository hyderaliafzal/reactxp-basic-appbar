"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* This file demonstrates a basic ReactXP app.
*/
var RX = require("reactxp");
var bar_1 = require("./components/bar");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super.call(this) || this;
    }
    App.prototype.render = function () {
        var menus = ["item1", "item2"];
        return (RX.createElement(bar_1.default, { title: "This is title", svgHeight: 20, svgWidth: 20, menus: menus }));
    };
    return App;
}(RX.Component));
module.exports = App;
//# sourceMappingURL=App.js.map