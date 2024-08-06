"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cust = /** @class */ (function () {
    function cust(name, std, email) {
        this.name = name;
        this.std = std;
        this.email = email;
        this._coursecount = 1;
    }
    cust.prototype.deletetoken = function () {
        console.log("token deleted!");
    };
    return cust;
}());
var subcust = /** @class */ (function (_super) {
    __extends(subcust, _super);
    function subcust() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    subcust.prototype.ChangeCourse = function () {
        this._coursecount = 4;
    };
    return subcust;
}(cust));
