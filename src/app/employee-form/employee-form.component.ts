import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../customclasses/custom-validators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  deptcodes =['LD','JS','PHP','HR','JAVA']
  employeeForm:FormGroup;
  constructor(public activeRoute:ActivatedRoute) // DI
  {
   const routerParameter=this.activeRoute.snapshot.params['empId'];
    // use this id to search the employee and take it from backend /  search the employee in angular store
    this.employeeForm=new FormGroup({
      empId:new FormControl(routerParameter,[Validators.required]), //invalid {required: true}, validation pass null
      empName:new FormControl("", [Validators.required, Validators.pattern("[A-Za-z ]*"), Validators.minLength(2)]), // pattern, minlength
      basicSalary:new FormControl("", [Validators.required, Validators.min(0)]),
      deptCode:new FormControl("JS",[Validators.required]),
      joiningDate:new FormControl("",[Validators.required]),
      experience:new FormControl("",[Validators.required, Validators.min(0), Validators.max(99)] ), //min, max
      emailId:new FormControl("",[Validators.required, Validators.email]), //email
      secreteCode: new FormControl("123", [Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
      confirmCode : new FormControl("",/* [CustomValidators.valueMatch2("123")] */)
    } , [CustomValidators.valueMatch3("secreteCode", "confirmCode")]);
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
  get scode(){
    return this.employeeForm.get("secreteCode");
  }
  get cscode(){
    return this.employeeForm.get("confirmCode");
  }
  collectData(){
   console.log(this.employeeForm)
  }
}
