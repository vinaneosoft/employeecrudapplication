import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../customclasses/employee';
import { Observable } from 'rxjs';
import { file } from '@rxweb/reactive-form-validators';

@Injectable({
  providedIn: 'root'
})
export class EmployeecrudService {

  url1="http://localhost:6000/employees";
  url2="http://localhost:5000/employees";
  constructor(private http:HttpClient) { }

  addEmployee(employee:Employee){
    //this.fileUpload(employee.employee_pic);
    const obs= this.http.post(`${this.url2}/add`,employee);// backend // secure : url, body
    return obs;
   /* obs.subscribe({
    next:(data)=>{
        return data;
    },
    error:(error)=>{
        return error;
    }
   }) */
  }
  getAllEmployees(){
    //this.http.get(this.url1) for jsonserver as a backend
    const obs=this.http.get(`${this.url2}/getall`)
    return obs;
  }

  fileUpload(file:File){
    let formData=new FormData();
    formData.append("profile_pic",file)
   // console.log(formData);
    const obs= this.http.post(`${this.url2}/fileadd`,formData, {
    reportProgress: true,
    observe: 'events',
  }); 
  }
}
