import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppserviceService } from '../appservice.service';
import { UserModule } from '../user/user.module';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {

  constructor(private sr:AppserviceService,private route:Router) { }

  ngOnInit():void{
  }
  adduser(myform:NgForm){

    const user:UserModule= new UserModule('',myform.value['name'],myform.value['email'],myform.value['password']);
    this.sr.addUser(user).subscribe((response)=>{
      console.log(response);
      this.route.navigate(['list']);
    },
    (errors)=>{console.log(errors)});
 }
}
