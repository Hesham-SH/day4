import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InitialService {

  constructor(private dbClient:HttpClient) { 
  }
  private connectionString = "https://jsonplaceholder.typicode.com/users";
  getUsers(){
    
    return this.dbClient.get(this.connectionString);
  }

  getUserById(id:any){
    
    return this.dbClient.get(this.connectionString + "/" + id);
  }

}
