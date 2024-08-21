import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  applicationName="EMPLOYEE CRUD";
  companyName="Neosoft Pvt. Ltd."


  @Output()
  emitter=new EventEmitter<string>();

  constructor(){
  /*   setTimeout(()=>{
      this.applicationName="NEOSOFT EMP CRUD"
    }, 6000); */
    console.log("in Header costructor");
    
    // constructors can not emit the events
    //this.fireEvent();
    //this.emitter.emit(this.companyName);
  }
  ngOnInit(): void {
    console.log("life cycle method");
    this.emitter.emit(this.companyName); // data output from here
    //this.companyName="Web Werks"
    //this.emitter.emit(this.companyName); 
  }
}
