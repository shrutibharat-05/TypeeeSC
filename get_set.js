"use strict";
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
    Object.defineProperty(cust.prototype, "appleemail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(cust.prototype, "course_count", {
        get: function () {
            return this._coursecount;
        },
        set: function (count) {
            if (count <= 1) {
                throw new Error("course count must be greater than 1");
            }
            this._coursecount;
        },
        enumerable: false,
        configurable: true
    });
    return cust;
}());
var shruti = new cust("sh", 55, "email");
