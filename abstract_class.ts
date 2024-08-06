abstract class Takephoto{  //here, abstract keyword shows that we cannot create an object or instance  of it
    constructor(
        public camera:string,
        public filter:string,
    ){

}
abstract getsepia():void{

}
}

class insta extends Takephoto{
constructor(
    public camera:string,
   public filter:string,
){
    super(camera,filter)
}
}
const user= new insta("hd","filt")
