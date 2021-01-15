/*
 * @Author: xjq
 * @Date: 2021-01-11 11:14:01
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-15 10:33:25
 * @Description: do-check.component
 * @FilePath: /hello-world/src/app/lifecycle/do-check/do-check.component.ts
 */

import { Component, DoCheck, Input, ViewChild } from '@angular/core';



class Hero {
  constructor(public name: string) {}
}


@Component({
  selector: 'do-check-child',
  template: `
  <div class="hero">
    <p>{{!!hero && hero.name}} can {{power}}</p>

    <h4>-- Change Log --</h4>
    <div *ngFor="let chg of changeLog">{{chg}}</div>
  </div>
  `,
  styles: [
    '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
    'p {background: Yellow; padding: 8px; margin-top: 8px}'
  ]
})
export class DoCheckChildComponent implements DoCheck {
  @Input() hero: Hero | undefined;
  @Input() power: string | undefined;


  changeDetected = false;
  changeLog: string[] = [];
  oldHeroName: string | undefined = '';
  oldPower: string  | undefined = '';
  oldLogLength = 0;
  noChangeCount = 0;

  constructor() { }

  ngDoCheck() {

    if (this.hero?.name !== this.oldHeroName) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Hero name changed to "${this.hero?.name}" from "${this.oldHeroName}"`);
      this.oldHeroName = this.hero?.name;
    }

    if (this.power !== this.oldPower) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
      this.oldPower = this.power;
    }

    if (this.changeDetected) {
        this.noChangeCount = 0;
    } else {
        // log that hook was called when there was no relevant change.
        const count = this.noChangeCount += 1;
        const noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
        if (count === 1) {
          // add new "no change" message
          this.changeLog.push(noChangeMsg);
        } else {
          // update last "no change" message
          this.changeLog[this.changeLog.length - 1] = noChangeMsg;
        }
    }

    this.changeDetected = false;
  }

  reset() {
    this.changeDetected = true;
    this.changeLog = [];
  }
}




@Component({
  selector: 'do-check',
  templateUrl: './do-check.component.html',
  styles: ['.parent {background: Lavender}']
})
export class DoCheckComponent {
  hero: Hero | undefined;
  power: string | undefined;
  title = 'DoCheck';
  @ViewChild(DoCheckChildComponent) childView: DoCheckChildComponent | undefined;

  constructor() { this.reset(); }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) { this.childView.reset(); }
  }
}