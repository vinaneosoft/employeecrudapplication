import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Employee } from '../customclasses/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent  {
  @Input()
  employee=new Employee(); // initialization

  @Input()
  cardStyle={}; // initialization

  @Output() // custom event emit
  eventEmitter=new EventEmitter<number>(); //<string>
  cardLinks={
    'btn':true,
    'btn-success':true,
    'm-2':true
  }

  
 
}
