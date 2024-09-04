import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
 counter=0;
  constructor() {
    console.log("in CounterService.....");
   }
  incrementCounter(){
    return ++this.counter;
  }
  decrementCounter(){
    return --this.counter;
  }
  resetCounter(){
    this.counter=0;
    return this.counter;
  }
}
