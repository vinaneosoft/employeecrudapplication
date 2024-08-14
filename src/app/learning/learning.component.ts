import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {

  message="Welcome to Neosoft";
  static companyLocation="dadar";
  classRef=LearningComponent;

  constructor(){
    console.log("constructor called...........");
    
    setTimeout(()=>this.message="Your base location is ", 4000)
  }
  display(){
    console.log(this.message);
    console.log(LearningComponent.companyLocation);
  }
}
