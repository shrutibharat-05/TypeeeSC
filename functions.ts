//In functions,type declaration of var is necessary 


function mynum(num:number){
    return num +2;
}
function yournum(num:number):number{
    return num +2;
    // return "hello"; //this will not give any error until you explicitly mention the data type
}


function myform(name:string,contact:number){
    
}
//here we can set deafault val as well
let cust=(name:string,email:string,ispaid:boolean = true):string=>{
 return "";
}


const heros=["thor","spiderman","Ironman"];
//const heros=[1,2,3];
heros.map((hero):string=>{ // if we hover over (hero), it will automatically give you the data type of object without explicitally declaring anything
    return `hero is${hero}`
})

//void,never

function errmsg(error:string):void{ //It does not return anything 
     console.log(error);
}


function consolemsg(stop:string):never{ //It will never return anything
    throw new Error (stop);
    
}
yournum(4);
cust("hh","hh@hcom");
myform("shruti",55)
mynum(5);


export{}