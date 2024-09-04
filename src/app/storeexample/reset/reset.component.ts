import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset } from '../../counter.actions';
import { CounterService } from '../../customservices/counter.service';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent {
  count3$:Observable<number>;
  normalCount3:number;
  constructor(private store : Store<{count:number}>,  private normalService:CounterService){
    this.count3$=this.store.select('count');
    this.normalCount3=normalService.counter;
  }
  reset(){
    this.store.dispatch(reset())
  }
}
