interface User {
    readonly dbId: number;
    name: string;
    userId:number;
    //function
    //start:()=> string
    startTrial():string
    //function with params
    getCoupan(coupanName: string,value:number):number

}

//We can here reopen that same interface:
interface User{
    emailid:string;
}
const shruti: User={ dbId:77,
  name:"shrut",userId:99,
  startTrial:()=>{
    return "hello"
  },
  getCoupan:(name:"mansoon", off:10)=>{
    return 20
  },
  emailid:"sh@"
}
//we can change non-readonly value
shruti.name="radha";


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
class student{

    
   
    constructor(
         public name:string,
         private readonly std:number,
               
    ){
       
 
    }
}
const abc = new student("hh",33)

export{}


