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

const shruti: User={ dbId:77,
  name:"shrut",userId:99,
  startTrial:()=>{
    return "hello"
  },
  getCoupan:(name:"mansoon", off:10)=>{
    return 20
  },
}
//we can change non-readonly value
shruti.name="radha";
