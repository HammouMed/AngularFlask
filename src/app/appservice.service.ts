import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  link="http://127.0.0.1:5000/"
  constructor(private http:HttpClient) {
  }

  addUser(user:UserModule):Observable<any>{
    return this.http.post('http://127.0.0.1:5000/add',user);

};
  listUser():Observable<UserModule[]>{
  return this.http.get<UserModule[]>('http://127.0.0.1:5000/users')};

 getPersonneById(id:String):Observable<UserModule>{
  return this.http.get<UserModule>('http://127.0.0.1:5000/user/'+id)
 }

}
