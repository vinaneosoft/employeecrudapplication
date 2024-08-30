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

  deleteEmployee(_id:number){ // id:string
    //console.log("in parent function", _id);

    const answer=window.confirm("Do you really want to delete?");
    if(answer){
        const obs=this.empcrud.deleteEmployeeById(_id);
        obs.subscribe({
          next:(data)=>{
            window.alert("Employee Deleted Successfully....")
            this.getEmployees();
          },
          error:(error)=>console.log(error)
        });
      }
  }

  // property value pair
  cardStyle={
    width:"20rem",  // camel case 
    backgroundColor:"#D27979"
  }
  flexClasses=['d-flex', 'flex-wrap'];
  //class : boolean value

}
