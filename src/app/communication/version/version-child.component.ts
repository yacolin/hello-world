/*
 * @Author: xjq
 * @Date: 2021-01-15 17:57:51
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-15 18:01:04
 * @Description:
 * @FilePath: /hello-world/src/app/communication/version/version-child.component.ts
 */

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  template: `
    <h3>Version {{ major }}.{{ minor }}</h3>
    <h4>Change log:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{ change }}</li>
    </ul>
  `,
})
export class VersionChildComponent implements OnChanges {
  @Input()
  major!: number;
  @Input()
  minor!: number;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
