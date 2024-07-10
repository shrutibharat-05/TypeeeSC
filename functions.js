"use strict";
//In functions,type declaration of var is necessary 
Object.defineProperty(exports, "__esModule", { value: true });
function mynum(num) {
    return num + 2;
}
function yournum(num) {
    return num + 2;
    // return "hello"; //this will not give any error until you explicitly mention the data type
}
function myform(name, contact) {
}
//here we can set deafault val as well
var cust = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = true; }
    return "";
};
var heros = ["thor", "spiderman", "Ironman"];
//const heros=[1,2,3];
heros.map(function (hero) {
    return "hero is".concat(hero);
});
//void,never
function errmsg(error) {
    console.log(error);
}
function consolemsg(stop) {
    throw new Error(stop);
}
yournum(4);
cust("hh", "hh@hcom");
myform("shruti", 55);
mynum(5);
