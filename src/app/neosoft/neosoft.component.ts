import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from '../customservices/counter.service';

@Component({
  selector: 'app-neosoft',
  templateUrl: './neosoft.component.html',
  styleUrl: './neosoft.component.css',
  providers:[CounterService]
})
export class NeosoftComponent implements OnDestroy, OnInit {

  constructor(public counterService:CounterService){
      console.log("in NeosoftComponent......");
      
  }
  ngOnInit(): void {
    console.log("NeosoftComponent Init phase...");
  }
  ngOnDestroy(): void {
    console.log("NeosoftComponent Destroy phase...");
    
  }


}
