import { Component, Input } from '@angular/core';
import { Employee } from '../customclasses/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  @Input()
  employee=new Employee(); // initialization

  cardLinks={
    'card-link':true ,
    'link':true
  }
}
