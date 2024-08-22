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
      empId:new FormControl("",[Validators.required]), //invalid {required: true}, validation pass null
      empName:new FormControl("", [Validators.required, Validators.pattern("[A-Za-z ]*"), Validators.minLength(2)]), // pattern, minlength
      basicSalary:new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
      deptCode:new FormControl("JS",[Validators.required]),
      joiningDate:new FormControl("",[Validators.required]),
      experience:new FormControl("",[Validators.required, Validators.min(0), Validators.max(99)] ), //min, max
      emailId:new FormControl("",[Validators.email]) //email
    });
  }

  get eid(){
      return this.employeeForm.get("empId");
  }
  get ename(){
      return this.employeeForm.get("empName");
  }
  get salary(){
    return this.employeeForm.get("basicSalary");
  }
  get dcode(){
    return this.employeeForm.get("deptCode");
  }
  get joining(){
    return this.employeeForm.get("joiningDate");
  }
  get exp(){
    return this.employeeForm.get("experience");
  }
  get email(){
    return this.employeeForm.get("emailId");
  }
  collectData(){
   console.log(this.employeeForm)
  }
}
