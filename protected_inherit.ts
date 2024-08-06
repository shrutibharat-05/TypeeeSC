class cust{
   protected _coursecount=1;
    constructor(
         public name:string,
         private readonly std:number,
         public email:string,      
    ){
       
 
    }
    private deletetoken(){
        console.log("token deleted!")
    }}
class subcust extends cust{
    ChangeCourse(){
        this._coursecount=4;
    }
}
export{}