import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  message="";
  loginFlag=false; // we will add this logic LoginService : service can be shared  
  constructor(private router:Router){
  }
  collectData(loginForm:any){
    console.log(loginForm.value);
    this.login(loginForm.value.username,loginForm.value.password);
  }
  login(uname:string, pass:string){
    this.loginFlag=false;
      if(uname=="admin" && pass=='neoadmin123')
       {
        // add this username in cookie
        this.loginFlag=true;
        this.router.navigate(['../home']);
       }
      else
        this.message="Incorrect username or password";
  }
}
