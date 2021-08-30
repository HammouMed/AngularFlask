
export class UserModule {
   _id:String
   name:string;
   email:string;
   password:string;
  constructor(_id:'',name='',email='',password=''){
    this._id=_id
    this.name=name;
    this.email=email;
    this.password=password;
  }
}
