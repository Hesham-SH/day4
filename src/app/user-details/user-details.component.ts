import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InitialService } from '../Services/initial.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent {
  id:any;
  user:any = {};
constructor(activatedRoute:ActivatedRoute, service:InitialService){

  this.id = activatedRoute.snapshot.params["id"];
 service.getUserById(this.id).subscribe({
  next: (data) =>{
    this.user = data;
    console.log(data);
  },
  // error: (err) => {
  //   this.user = err;
  //   console.log(err);
  // },
 });
}
}
