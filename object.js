"use strict";
//vaery basic:
//declare an obj
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "shruti",
    age: 20,
    ispaid: true,
};
//Now, declare a function with expected data type as a param of function
function createuser(_a) {
    var string = _a.name, number = _a.age, boolean = _a.ispaid;
}
//Now call the function with declared obj as param
createuser(user);
// directly use obj in function as return data type 
function course() {
    return { name: "react", price: 344 };
}
//use obj in function, instaed of usual data type write name of an obj
function greet(person) {
    return { name: "shruti", age: 55 };
}
//create instance:
var myUser = {
    _id: 1,
    name: "shruti",
    age: 20,
    ispaid: true,
    //here even if we dont provide any creddeatils, it will not give any error since it is optional
};

