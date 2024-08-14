import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
  message="";
  companyLocation="dadar";

  imagePath="asdkjsks.jpg"
  constructor(){
    setTimeout(()=>this.message="new message", 4000)
  }
  display(){
    console.log(this.message);
    console.log(this.companyLocation);
  }
}
