import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
//1. if u have standalone component, then we can import other modules like below
//import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css',
 // imports:[MatSlideToggleModule]
})
export class LearningComponent {
  sampleToggle=false;
  inputType="text";

  message="Welcome to Neosoft";
  companyLocation="dadar";
  static objectCounter=0;

  classRef=LearningComponent;

  constructor(private datePipe : DatePipe) // dependancy injection
  {
    LearningComponent.objectCounter++;
    console.log("constructor called...........");
    setTimeout(()=>this.message="Please Join on ur Base Location", 4000)
   // this.salaries.sort((n1,n2)=>n1-n2); // model side sorting
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

  salaries=[989, 677889.56434, 45678.4567, 343556.342, 56545667.45, 665768.1, 5465757]

  today = new Date();

   test(){
      let newFormat=this.datePipe.transform(this.today, "fullDate")
      console.log(newFormat);
      
  }
  test2(){
    console.log(this.sampleToggle);
    
  }
  rupees="INR"

  birthDates=[new Date('12 Jan 2024'), new Date('11 Jan 2024'), new Date('10 Dec 2023')]
}
