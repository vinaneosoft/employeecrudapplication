import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public counter=0;
  constructor() {

    console.log("in CounterService.....");
    
   }

  incrementCounter(){
    this.counter++;
  }
}
