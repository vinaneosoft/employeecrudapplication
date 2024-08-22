import { Component } from '@angular/core';
import { Employee } from '../customclasses/employee';
@Component({
  selector: 'app-neo-employee',
  templateUrl: './neo-employee.component.html',
  styleUrl: './neo-employee.component.css'
})
export class NeoEmployeeComponent {

  neoemployees:Employee[]=[];
  constructor(){
   this.getEmployees();
  }
  getEmployees(){
    this.neoemployees=[
      new Employee(111,"Hari kumar", new Date('12-July-2004'), 90000, "LD", 30, "abc@gmail.com"),
      new Employee(121,"Shama kumari", new Date('10-July-2004'), 98000, "JS", 25, "abc@gmail.com"),
      new Employee(100,"Arun vaidya", new Date('18-Dec-2000'), 80000, "LD", 35, "abc@gmail.com"),
    ]
  }

  // property value pair
  cardStyle={
    width:"20rem",  // camel case 
    backgroundColor:"#D27979"
  }
  flexClasses=['d-flex', 'flex-wrap'];
  //class : boolean value

}
