import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from '../customservices/counter.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-neosoft',
  templateUrl: './neosoft.component.html',
  styleUrl: './neosoft.component.css'

})
export class NeosoftComponent implements OnDestroy, OnInit {

  constructor(public counterService:CounterService, public uppercase:UpperCasePipe){
      console.log("in NeosoftComponent......");

  }
  ngOnInit(): void {
    console.log("NeosoftComponent Init phase...");
  }
  ngOnDestroy(): void {
    console.log("NeosoftComponent Destroy phase...");
    
  }


}
