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
var RX = require("reactxp");
var reactxp_imagesvg_1 = require("reactxp-imagesvg");
var styles = {
    bar: RX.Styles.createViewStyle({
        minWidth: 1920,
        height: 60,
        backgroundColor: '#FFDAB9',
        flexDirection: 'row',
        padding: 20,
        flex: 1
    }),
    drawerButton: RX.Styles.createButtonStyle({}),
    title: RX.Styles.createTextStyle({
        color: 'white'
    }),
    menuModel: RX.Styles.createViewStyle({
        width: 100,
        left: 0,
        top: 60,
        position: 'absolute'
    })
};
var bar = (function (_super) {
    __extends(bar, _super);
    function bar() {
        var _this = _super.call(this) || this;
        _this.state = {
            currentsvgD: "M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z",
            currentsvgViewBox: "0 0 32 32",
            nextsvgD: "M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z",
            nextsvgViewBox: "0 0 32 32"
        };
        return _this;
    }
    bar.prototype._buttonClick = function () {
        var svgD = this.state.currentsvgD;
        var svgViewBox = this.state.currentsvgViewBox;
        this.setState({
            currentsvgD: this.state.nextsvgD,
            currentsvgViewBox: this.state.nextsvgViewBox,
            nextsvgD: svgD,
            nextsvgViewBox: svgViewBox
        });
        this.showDialog();
    };
    bar.prototype.showDialog = function () {
        var _modalId = 'menu';
        if (RX.Modal.isDisplayed(_modalId) == true) {
            RX.Modal.dismiss(_modalId);
        }
        else {
            var menuModel = (RX.createElement(RX.View, { style: styles.menuModel }, this.props.menus.map(function (menu, i) {
                return RX.createElement(RX.View, { key: i },
                    RX.createElement(RX.Text, null,
                        " ",
                        menu,
                        " "));
            })));
            RX.Modal.show(menuModel, _modalId);
        }
    };
    bar.prototype.render = function () {
        var image = "http://services.swpc.noaa.gov/images/swx-overview-large.gif";
        return (RX.createElement(RX.View, { style: { minWidth: 1920, maxHeight: 60 } },
            RX.createElement(RX.View, { style: styles.bar },
                RX.createElement(RX.Button, { style: styles.drawerButton, onPress: this._buttonClick.bind(this) },
                    RX.createElement(reactxp_imagesvg_1.default, { height: this.props.svgHeight, width: this.props.svgWidth, viewBox: this.state.currentsvgViewBox, style: { marginRight: 3 } },
                        RX.createElement(reactxp_imagesvg_1.SvgPath, { fillColor: 'white', d: this.state.currentsvgD }))),
                RX.createElement(RX.Text, { style: styles.title }, this.props.title))));
    };
    return bar;
}(RX.Component));
exports.default = bar;
//# sourceMappingURL=bar.js.map