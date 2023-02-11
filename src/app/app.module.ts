import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import {HttpClientModule} from '@angular/common/http';
//Home - profile - Error - all users

const routes:Routes = [
                  {path:"", component:HomeComponent},
                  {path:"users", component:UsersComponent},
                  {path:"users/:id", component:UserDetailsComponent},
                  {path:"profile", component:ProfileComponent},
                  {path:"main", component:MainComponent},
                  {path:"**", component:ErrorComponent}
              ]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    ProfileComponent,
    ErrorComponent,
    UsersComponent,
    UserDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
