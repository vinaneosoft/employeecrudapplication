import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  deptcodes =['LD','JS','PHP','HR','JAVA']

  employeeForm:FormGroup;

  constructor(){
    this.employeeForm=new FormGroup({
      empId:new FormControl(45),
      empName:new FormControl(),
      basicSalary:new FormControl(),
      deptCode:new FormControl(),
      joiningDate:new FormControl(),
      experience:new FormControl()
    });

   // this.employeeForm.get("empId")?.setValue(56788);
  }

  collectData(){
   //console.log(this.employeeForm.get("empId")?.value);
   console.log(this.employeeForm)
  }
}
