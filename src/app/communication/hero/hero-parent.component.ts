/*
 * @Author: xjq
 * @Date: 2021-01-15 15:34:33
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-15 15:35:28
 * @Description: 
 * @FilePath: /hello-world/src/app/communication/hero/hero-parent.component.ts
 */
import { Component } from '@angular/core';

import { HEROES } from './hero';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <app-hero-child *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </app-hero-child>
  `
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
}
