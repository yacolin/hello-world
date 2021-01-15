/*
 * @Author: xjq
 * @Date: 2021-01-15 17:29:23
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-15 17:47:27
 * @Description: 
 * @FilePath: /hello-world/src/app/communication/name/name-parent.compoent.ts
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
  <h2>Master controls {{names.length}} names</h2>
  <app-name-child *ngFor="let name of names" [name]="name"></app-name-child>
  `
})
export class NameParentComponent {
  // Displays 'Dr IQ', '<no name set>', 'Bombasto'
  names = ['Dr IQ', '   ', '  Bombasto  '];
}

