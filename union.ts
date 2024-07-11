type user={
   name:string
   id:number
}
type admin={
    username:string
    id:number
 }

 //a person can be user and admin also:
 let shruti:user | admin ={
    name:"shr",
    id:1
 }
 shruti={username:"sh",id:22}


 
//Assigning mutiple data types to single var:
 function getID(id: string | number){
//making random api calls 
      //console.log(`Id is: ${id}`)
      if(typeof id === "string"){
        id.toLowerCase()
      }
 }
 getID(4);
 getID("4");

 //In case of arrays:

 const one :number[]=[1,2,3]
 const two :string[]=["a","b","c"]
 const three : (string | number | boolean)[]=[1,2,"a",true]

console.log(one)

export{}