import { Component } from '@angular/core';
import { Employee } from '../customclasses/employee';
import { EmployeecrudService } from '../customservices/employeecrud.service';
@Component({
  selector: 'app-neo-employee',
  templateUrl: './neo-employee.component.html',
  styleUrl: './neo-employee.component.css'
})
export class NeoEmployeeComponent {

  neoemployees:Employee[]=[];
  constructor(private empcrud:EmployeecrudService){
   this.getEmployees();
  }
  getEmployees(){
      const obs=this.empcrud.getAllEmployees();
      obs.subscribe({
        next:(data)=>{
          this.neoemployees=data as Employee[];
        },
        error:(error)=>console.log(error)
      });
  }

  // property value pair
  cardStyle={
    width:"20rem",  // camel case 
    backgroundColor:"#D27979"
  }
  flexClasses=['d-flex', 'flex-wrap'];
  //class : boolean value

}
