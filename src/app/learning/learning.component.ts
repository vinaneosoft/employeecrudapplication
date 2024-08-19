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
  locations=["rabale", "dadar", "parel"];
  voterAge=0;
  constructor(){
    LearningComponent.counter++;
    console.log("constructor called...........");
    setTimeout(()=>this.message="Your base location is ", 4000)
  }
  display(){
    console.log(this.message);
    console.log(this.companyLocation);
  }

  imageObject={
    path:"",
    alternatemsg:"nature image",
    height:500,
    width:400
  }

  getNode(node:any){
      console.log(node);
      /* innertext of p */
      console.log(node.textContent);
      
  }
  getAge(nodevalue:any){
    console.log(nodevalue);
    console.log(typeof nodevalue); //value via trv then its always string
    
  }
}
