import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement } from '../../counter.actions';
import { CounterService } from '../../customservices/counter.service';
@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrl: './decrement.component.css'
})
export class DecrementComponent {
  count2$:Observable<number>;
  normalCount2:number;
  constructor(private store : Store<{count:number}>, private normalService:CounterService){
    this.count2$=this.store.select('count');
    this.normalCount2=normalService.counter;
  }
  decr(){
    this.store.dispatch(decrement())
  }
  normalDecr(){
    this.normalCount2=this.normalService.decrementCounter();
  }

}
