/*
 * @Author: xjq
 * @Date: 2021-01-10 16:05:13
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-10 16:36:00
 * @Description: peek-a-book-parent
 * @FilePath: \hello-world\src\app\lifecycle\peek-a-boo-parent\peek-a-boo-parent.component.ts
 */
import { Component } from '@angular/core';
import { LoggerService } from '../../logger.service';

@Component({
  selector: 'peek-a-boo-parent',
  template: `
    <div class="parent">
      <h2>Peek-A-Boo</h2>

      <button (click)="toggleChild()">
        {{ hasChild ? 'Destroy' : 'Create' }} PeekABooComponent
      </button>
      <button (click)="updateHero()" [hidden]="!hasChild">Update Hero</button>

      <peek-a-boo *ngIf="hasChild" [name]="heroName"> </peek-a-boo>

      <h4>-- Lifecycle Hook Log --</h4>
      <div *ngFor="let msg of hookLog">{{ msg }}</div>
    </div>
  `,
  styles: ['.parent {background: moccasin}'],
  providers: [LoggerService],
})
export class PeekABooParentComponent {
  hasChild = false;
  hookLog: string[];

  heroName = 'Winstorm';
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear();
    }

    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }
}
