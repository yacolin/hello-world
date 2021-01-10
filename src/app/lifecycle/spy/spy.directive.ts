/*
 * @Author: xjq
 * @Date: 2021-01-10 16:39:42
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-10 16:43:25
 * @Description: spy directive
 * @FilePath: \hello-world\src\app\lifecycle\spy\spy.directive.ts
 */
import { Directive, OnDestroy, OnInit } from '@angular/core';
import { LoggerService } from '../../logger.service';
let nextId = 1;

// Spy on any element to which it is applied
// Usage: <div appSpy>...</div>
@Directive({ selector: '[appSpy]' })
export class SpyDirective implements OnInit, OnDestroy {
  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logIt(`OnInit`);
  }

  ngOnDestroy() {
    this.logIt(`OnDestroy`);
  }

  private logIt(msg: string) {
    this.logger.log(`Spy #${nextId++} ${msg}`);
  }
}
