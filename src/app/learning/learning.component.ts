import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {

  message="Welcome to Neosoft";
  companyLocation="dadar";
  static counter=0;
  classRef=LearningComponent;
  constructor(){
    LearningComponent.counter++;
    console.log("constructor called...........");
    setTimeout(()=>this.message="Your base location is ", 4000)
  }
  display(){
    console.log(this.message);
    console.log(this.companyLocation);
  }
}
