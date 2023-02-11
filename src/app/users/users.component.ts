import { Component } from '@angular/core';
import { InitialService } from '../Services/initial.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent {
  users:any;

  constructor(service:InitialService){
     service.getUsers().subscribe(
      {
        next : (data) => {
          console.log(data)
            this.users = data;
        },
        error : (error) => {
            console.log(error);
        }
      }
      );
  }
}
