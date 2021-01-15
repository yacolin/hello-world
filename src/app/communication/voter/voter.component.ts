/*
 * @Author: xjq
 * @Date: 2021-01-15 18:34:14
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-15 18:34:28
 * @Description: 
 * @FilePath: /hello-world/src/app/communication/voter/voter.component.ts
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
    <h4>{{name}}</h4>
    <button (click)="vote(true)"  [disabled]="didVote">Agree</button>
    <button (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `
})
export class VoterComponent {
  @Input()
    name!: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
