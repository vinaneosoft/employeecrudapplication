import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {

  inputType="text";

  message="Welcome to Neosoft";
  companyLocation="dadar";
  static objectCounter=0;

  classRef=LearningComponent;

  constructor(){
    LearningComponent.objectCounter++;
    console.log("constructor called...........");
    setTimeout(()=>this.message="Please Join on ur Base Location", 4000)
  }


  display(){
    console.log(this.message);
    console.log(this.companyLocation);
    
   // console.log(this.companyLocation);
  }


 
  locations=["rabale", "dadar", "parel"];
  voterAge=0;



  imageObject={
    path:"absolute path",
    alternatemsg:"nature image",
    height:500,
    width:400
  }

  getNode(node:any){
      console.log(node);
      /* innertext of p */
      console.log(node.innerHTML);
      console.log(node.innerText);
      console.log(node.children);
  }
  getAge(nodevalue:any){
    console.log(nodevalue);
    console.log(typeof nodevalue); //value via trv  always string
  }

  subject={
    sub1:0,
    sub2:0,
    sub3:0
  }
  percentage=0;
  getPerc(){
    this.percentage=((this.subject.sub1+this.subject.sub2+this.subject.sub3)/300)*100
  }

  salaries=[677889.56434, 45678.4567, 343556.342, 56545667.45, 665768.1, 5465757]

  today = new Date();
}
