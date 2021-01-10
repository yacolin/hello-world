/*
 * @Author: xjq
 * @Date: 2021-01-10 16:54:01
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-10 17:12:53
 * @Description: on-changes.component
 * @FilePath: \hello-world\src\app\lifecycle\on-changes\on-changes.component.ts
 */
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: 'on-changes-child',
  template: `
    <div class="hero">
      <p>{{ hero.name }} can {{ power }}</p>

      <h4>-- Change Log --</h4>
      <div *ngFor="let chg of changeLog">{{ chg }}</div>
    </div>
  `,
  styles: [
    '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
    'p {background: Yellow; padding: 8px; margin-top: 8px}',
  ],
})
export class OnChangesChildComponent implements OnChanges {
  @Input() hero: Hero | undefined;
  @Input() power: string | undefined;

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }

  reset() {
    this.changeLog = [];
  }
}

@Component({
  selector: 'on-changes',
  templateUrl: './on-changes.component.html',
  styles: ['.parent {background: Lavender;}'],
})
export class OnChangesComponent {
  hero: Hero | undefined;
  power: string | undefined;
  title = 'OnChanges';

  @ViewChild(OnChangesChildComponent) childView:
    | OnChangesChildComponent
    | undefined;

  constructor() {
    this.reset();
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero('Windstorm');

    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }
}
