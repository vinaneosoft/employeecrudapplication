import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  message="";
  collectData(loginForm:any){
    console.log(loginForm.value);
    this.login(loginForm.value.username,loginForm.value.password);
    
  }

  login(uname:string, pass:string){
      if(uname=="admin" && pass=='neoadmin123')
       {
          
       }
      else
        this.message="Incorrect username or password";
  }
}
