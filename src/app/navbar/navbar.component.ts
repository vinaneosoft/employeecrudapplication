import { Component, Input } from '@angular/core';
import { UserService } from '../customservices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input()
  brandName="";  // "" initial value, data will come from parent

  constructor(public user:UserService, private router:Router){
  /*   setTimeout(()=>{
      this.brandName="Child Rewrite"
    }, 3000) */
    console.log("in Navbarcomponent");
    
  }
  out(){
    this.user.logout();
    window.alert("logged out successfully.....");
    this.router.navigate(['../home']);
  }
}
