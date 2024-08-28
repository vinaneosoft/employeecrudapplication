import { Component } from '@angular/core';
import { CounterService } from '../customservices/counter.service';


@Component({
  selector: 'app-webwerks',
  templateUrl: './webwerks.component.html',
  styleUrl: './webwerks.component.css'
})
export class WebwerksComponent {

  constructor(public counterS:CounterService){

  }
}
