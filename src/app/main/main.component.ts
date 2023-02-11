import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    "ul{list-style-type:none}",
  ]
})
export class MainComponent {
// @Input() nameValue="";
// @Input() mailValue="";

userName:string = "";
userEmail:string = "";

  RegForm = new FormGroup({
    name : new FormControl("Hesham",Validators.required),
    email : new FormControl(0, [Validators.max(40), Validators.pattern(/[a-zA-z]{10}/)]) 
  })

  validateData(){
    this.userName = this.RegForm.controls.name.status;
    this.userEmail = this.RegForm.controls.email.status;

    console.log(this.RegForm);
  }
}
