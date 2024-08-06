var shruti = { dbId: 77,
    name: "shrut", userId: 99,
    startTrial: function () {
        return "hello";
    },
    getCoupan: function (name, off) {
        return 20;
    },
    emailid: "sh@" };
//we can change non-readonly value
shruti.name = "radha";
//Types v/s interface:
//Types cannot be modified further whereas, interfaces can be modified 
// class student{
//     public name:string;
//    private readonly std:number;
//     constructor(name:string,std:number){
//         this.name=name;
//         this.std=std;
//     }
// }
var student = /** @class */ (function () {
    function student(name, std) {
        this.name = name;
        this.std = std;
    }
    return student;
}());
var abc = new student("hh", 33);
