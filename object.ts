//vaery basic:
//declare an obj

let user={
    name:"shruti",
    age:20,
    ispaid:true,
}

//Now, declare a function with expected data type as a param of function
function createuser({name:string, age:number, ispaid:boolean}){}

//Now call the function with declared obj as param
createuser(user)




// directly use obj in function as return data type 
  function course():{name:string,price:number}{
    return{name:"react", price:344}
  }

//type aliases:
 //declare an obj 
//can be declared using either 'interface' or 'type' keyword. It actually takes value as data type we want from that var 
interface Person {
    name: string
    age: number
  }
   
  //use obj in function, instaed of usual data type write name of an obj
  function greet(person: Person) {
    return {name:"shruti",age:55}
  }


//'readonly' and optional('?')
//declare obj
type User={
    readonly _id:number //readonly, so we cannot change or modify it amnuallyonce it is set by user
    name:string
    age:number
    ispaid:boolean
    creddetails ?:number //optional
}

//create instance:
let myUser:User={
    _id:1,
    name:"shruti",
    age:20,
    ispaid:true,
    //here even if we dont provide any creddeatils, it will not give any error since it is optional
}

//effective use of type in case of credit card :
//folloing type method is not used since it takes so long to code
type Cardnum ={
    num:string
}
type CardDate={
    date:string
}

//now the third type using previious two types   
type mix = Cardnum & CardDate & {
 cvv : number
}

  export{}