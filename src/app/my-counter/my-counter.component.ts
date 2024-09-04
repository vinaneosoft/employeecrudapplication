import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})
export class MyCounterComponent {
count$:Observable<number>

constructor(public store:Store<{count:number}>){
   this.count$=this.store.select('count');
}
incr(){
  this.store.dispatch(increment())
}
decr(){
  this.store.dispatch(decrement())
}
reset(){
  this.store.dispatch(reset())
}
}
