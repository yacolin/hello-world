import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-lv',
  template: `
    <h3>Countdown to Liftoff (via local variable)</h3>
    <button (click)="timer.start()">Start</button>
    <button (click)="timer.stop()">Stop</button>
    <div class="seconds">{{ timer.seconds }}</div>
    <app-countdown-timer #timer></app-countdown-timer>
  `,
  styleUrls: ['./demo.scss']
})
export class CountdownLocalVarParentComponent {}



// View Child version

@Component({
  selector: 'app-countdown-parent-vc',
  template: `
  <h3>Countdown to Liftoff (via ViewChild)</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div class="seconds">{{ seconds() }}</div>
  <app-countdown-timer></app-countdown-timer>
  `,
  styleUrls: ['./demo.scss']
})
export class CountDownViewChildParentComponent implements AfterViewInit {
  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;


  seconds() {
    return 0;
  }


  ngAfterViewInit(): void {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0)
  }
  

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }
}