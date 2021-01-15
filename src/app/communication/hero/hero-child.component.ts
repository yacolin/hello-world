/*
 * @Author: xjq
 * @Date: 2021-01-15 15:34:23
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-15 17:33:10
 * @Description: 
 * @FilePath: /hello-world/src/app/communication/hero/hero-child.component.ts
 */
import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `
})
export class HeroChildComponent {
  @Input()
  hero!: Hero;
  @Input('master')
  masterName!: string; // tslint:disable-line: no-input-rename
 // tslint:disable-line: no-input-rename
}
