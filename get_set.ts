class cust{
    private _coursecount=1;
    constructor(
         public name:string,
         private readonly std:number,
         public email:string,      
    ){
       
 
    }
    private deletetoken(){
        console.log("token deleted!")
    }
    get appleemail():string{
        return `apple${this.email}`}

    get course_count():number{
         return this._coursecount
    }    

    set course_count(count){//there should not be any datatype in setter
        if(count<=1){
            throw new Error("course count must be greater than 1")
        }
        this._coursecount
    }
    

}
const shruti = new cust("sh",55,"email")
//shruti.deletetoken()   ----this can only be accesses in class only
export{}