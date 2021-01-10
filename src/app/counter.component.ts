/*
 * @Author: xjq
 * @Date: 2021-01-10 14:51:26
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-10 14:59:29
 * @Description: counter
 * @FilePath: \hello-world\src\app\counter.component.ts
 */

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      Counter = {{ counter }}

      <h5>-- Counter Change Log --</h5>
      <div *ngFor="let chg of changeLog" appSpy>{{ chg }}</div>
    </div>
  `,
  styles: ['.counter {background: LightYellow; padding: 8px; margin-top: 8px}'],
})
export class MyCounterComponent implements OnChanges {
  @Input() counter: number | undefined;

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    // Empty the changeLog whenever counter goes to zero
    // hint: this is a way to respond programmatically to external value changes.
    if (this.counter === 0) {
      this.changeLog = [];
    }

    // A change to `counter` is the only change we care about
    const chng = changes.counter;
    const cur = chng.currentValue;
    const prev = JSON.stringify(chng.previousValue); // first time is {}; after is integer
    this.changeLog.push(`counter: currentValue = ${cur}, previous = ${prev}`);
  }
}

@Component({
  selector: 'counter-parent',
  template: `
    <div class="parent">
      <h2>Counter Spy</h2>

      <button (click)="updateCounter()">Update counter</button>
      <button (click)="reset()">Reset Counter</button>

      <app-counter [counter]="value"></app-counter>

      <h4>-- Spy Lifecycle Hook Log --</h4>
      <div *ngFor="let msg of spyLog">{{ msg }}</div>
    </div>
  `,
  styles: ['.parent {background: gold;}'],
  providers: [LoggerService],
})
export class CounterParentComponent {
  value: number = 0;
  spyLog: string[] = [];

  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.spyLog = logger.logs;
    this.reset();
  }
  updateCounter() {
    this.value += 1;
    this.logger.tick();
  }

  reset() {
    this.logger.log('-- reset --');
    this.value = 0;
    this.logger.tick();
  }
}
