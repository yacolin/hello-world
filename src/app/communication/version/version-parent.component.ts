/*
 * @Author: xjq
 * @Date: 2021-01-15 18:13:56
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-15 18:17:56
 * @Description: 
 * @FilePath: /hello-world/src/app/communication/version/version-parent.component.ts
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  template: `
    <h2>Source code version</h2>
    <button (click)="newMinor()">New minor version</button>
    <button (click)="newMajor()">New major version</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
  `
})
export class VersionParentComponent {
  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}