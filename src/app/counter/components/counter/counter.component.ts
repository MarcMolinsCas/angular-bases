import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-root',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 10;
  increaseCounter(value: number):void {
    this.counter+=value;
  }
  resetCounter():void{
    this.counter = 10;
  }

}
