"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//a person can be user and admin also:
var shruti = {
    name: "shr",
    id: 1
};
shruti = { username: "sh", id: 22 };
//Assigning mutiple data types to single var:
function getID(id) {
    //making random api calls 
    //console.log(`Id is: ${id}`)
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getID(4);
getID("4");
//In case of arrays:
var one = [1, 2, 3];
var two = ["a", "b", "c"];
var three = [1, 2, "a", true];
console.log(one);
