import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../../counter.actions';
import { CounterService } from '../../customservices/counter.service';
@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrl: './increment.component.css'
})
export class IncrementComponent {
  count1$:Observable<number>;
  normalCount1:number;
  constructor(private store : Store<{count:number}>, private normalService:CounterService){
    this.count1$=this.store.select('count'); // store select
    this.normalCount1=normalService.counter; // normal shared service object
  }
  incr(){
    this.store.dispatch(increment())
  }
  normalIncr(){
    this.normalCount1=this.normalService.incrementCounter()
  }
}
