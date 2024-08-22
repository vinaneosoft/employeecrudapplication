import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      empId:new FormControl("",[Validators.required]),
      empName:new FormControl("", [Validators.required, Validators.pattern("[A-Za-z ]*"), Validators.minLength(2)]),
      basicSalary:new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
      deptCode:new FormControl("JS",[Validators.required]),
      joiningDate:new FormControl("",[Validators.required]),
      experience:new FormControl("",[Validators.required, Validators.min(0), Validators.max(99)] ),
      emailId:new FormControl("",[Validators.email])
    });

   // this.employeeForm.get("empId")?.setValue(56788);
  }

  collectData(){
   //console.log(this.employeeForm.get("empId")?.value);
   console.log(this.employeeForm)
  }
}
