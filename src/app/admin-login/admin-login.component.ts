import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../customservices/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  message="";
  flag=false;
  constructor(private router:Router, public userService:UserService){
    //console.log("in AdminLoginComponent");
  }
  collectData(loginForm:any){
   // console.log(loginForm.value);
    this.flag=this.userService.login(loginForm.value.username,loginForm.value.password);
    if(this.flag){
      window.alert("You are logged in successfully.....");
      this.router.navigate(['../home'])
    }
    else
      this.message="Incorrect username or password"
  }
}




