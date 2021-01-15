/*
 * @Author: xjq
 * @Date: 2021-01-15 17:29:11
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-15 17:45:21
 * @Description: 
 * @FilePath: /hello-world/src/app/communication/name/name-child.component.ts
 */
// tslint:disable: variable-name
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: '<h3>"{{name}}"</h3>'
})
export class NameChildComponent {
  @Input()
  get name(): string { return this._name; }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  private _name = '';
}
