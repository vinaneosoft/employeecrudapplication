import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../customclasses/custom-validators';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../customclasses/employee';
import { EmployeecrudService } from '../customservices/employeecrud.service';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  deptcodes =['LD','JS','PHP','HR','JAVA']
  employeeForm:FormGroup;
  employee:any;
  constructor(public activeRoute:ActivatedRoute, private empcrud:EmployeecrudService) // DI
  {
   //const routerParameter=this.activeRoute.snapshot.paramMap.get('empId');
   const routerParameter=this.activeRoute.snapshot.params['empId']
   console.log(routerParameter);
   

    // use this id to search the employee and take it from backend /  search the employee in angular store
    this.employeeForm=new FormGroup({
      _id:new FormControl(routerParameter,[Validators.required]), //invalid {required: true}, validation pass null
      emp_name:new FormControl("", [Validators.required, Validators.pattern("[A-Za-z ]*"), Validators.minLength(2)]), // pattern, minlength
      emp_salary:new FormControl("", [Validators.required, Validators.min(0)]),
      dept_code:new FormControl("JS",[Validators.required]),
      joining_date:new FormControl("",[Validators.required]),
      experience:new FormControl("",[Validators.required, Validators.min(0), Validators.max(99)] ), //min, max
      emp_email:new FormControl("",[Validators.required, Validators.email]), //email
      secrete_code: new FormControl("123", [Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
      confirmCode : new FormControl("",/* [CustomValidators.valueMatch2("123")] */),
      employee_pic:new FormControl("",[Validators.required])
    } , [CustomValidators.valueMatch3("secrete_code", "confirmCode")]);
  }
  get eid(){
      return this.employeeForm.get("_id");
  }
  get ename(){
      return this.employeeForm.get("emp_name");
  }
  get salary(){
    return this.employeeForm.get("emp_salary");
  }
  get dcode(){
    return this.employeeForm.get("dept_code");
  }
  get joining(){
    return this.employeeForm.get("joining_date");
  }
  get exp(){
    return this.employeeForm.get("experience");
  }
  get email(){
    return this.employeeForm.get("emp_email");
  }
  get scode(){
    return this.employeeForm.get("secrete_code");
  }
  get cscode(){
    return this.employeeForm.get("confirmCode");
  }
  collectData(){
   //console.log(this.employeeForm)
   this.employee=this.employeeForm.value;
   console.log(this.employee);
   if(this.activeRoute.snapshot.routeConfig?.path=="addemployee"){
      const obs=this.empcrud.addEmployee(this.employee); // crud service
      obs.subscribe({
        next:(data)=>{ 
         this.employee= data as Employee; 
          window.alert(`Employee with id ${this.employee._id} added successfully...`); 
        },
        error:(error)=>console.log(error)
      });
   }
  }
  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    this.empcrud.fileUpload(file);
}
}
