import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ListUsersComponent,
    DetailUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'add', component: SignInComponent},
      {path: 'list', component: ListUsersComponent},
      {path: 'detail/:id', component:DetailUserComponent},
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
