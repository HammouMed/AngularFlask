import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppserviceService } from '../appservice.service';
import { UserModule } from '../user/user.module';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent {
  user:UserModule=new UserModule('','','','');
  constructor(private activeRoute:ActivatedRoute,private sr:AppserviceService) { }

  ngOnInit() {

    this.activeRoute.params.subscribe((params)=>
    {this.sr.getPersonneById(params.id).subscribe((response)=>
     {this.user=response;
        console.log(response.name) });});
      }
  }
