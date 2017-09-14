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
Object.defineProperty(exports, "__esModule", { value: true });
var reactxp_1 = require("reactxp");
var styles = {};
var Topbar = (function (_super) {
    __extends(Topbar, _super);
    function Topbar() {
        return _super.call(this) || this;
    }
    Topbar.prototype.render = function () {
        return (reactxp_1.default.createElement(reactxp_1.default.Text, null, "test"));
    };
    return Topbar;
}(reactxp_1.default.Component));
exports.default = Topbar;
//# sourceMappingURL=Topbar.js.map