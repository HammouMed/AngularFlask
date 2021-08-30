import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppserviceService } from '../appservice.service';
import { UserModule } from '../user/user.module';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit  {
  users:UserModule[]=[];
  constructor(private sr:AppserviceService, private route:Router) { }

  ngOnInit(){
    this.sr.listUser().subscribe((response)=>{
      this.users=response;

    })
  }
  detailUser(user:UserModule){
      let us=JSON.stringify(user._id.valueOf());
      let tt=us.substring(9,us.length-2);
      console.log(tt);
      const link=['detail/',tt];
      this.route.navigate(link);
  }

}
