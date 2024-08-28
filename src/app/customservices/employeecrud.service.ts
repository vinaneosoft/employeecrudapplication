import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../customclasses/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeecrudService {

  url1="http://localhost:6000/employees";
  url2="http://localhost:5000";
  constructor(private http:HttpClient) { }

   addEmployee(employee:Employee){
    console.log(employee);
    const obs= this.http.post(`${this.url2}/employees/add`,employee); // backend // secure : url, body
    obs.subscribe({
      next:(success)=>{/* console.log(success) */},
      error:(error)=>console.log(error)
    });
  }
}
