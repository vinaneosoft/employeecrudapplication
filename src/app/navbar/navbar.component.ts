import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input()
  brandName="";  // "" initial value, data will come from parent

  constructor(){
  /*   setTimeout(()=>{
      this.brandName="Child Rewrite"
    }, 3000) */
  }
}
