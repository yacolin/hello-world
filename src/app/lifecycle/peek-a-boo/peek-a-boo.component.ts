/*
 * @Author: xjq
 * @Date: 2021-01-10 16:05:00
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-10 16:35:12
 * @Description: peek-a-book
 * @FilePath: \hello-world\src\app\lifecycle\peek-a-boo\peek-a-boo.component.ts
 */
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Directive,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { LoggerService } from '../../logger.service';

let nextId = 1;

@Directive()
export class PeekABooDirective implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logIt(`OnInit`);
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}

@Component({
  selector: 'peek-a-boo',
  template: '<p>Now you see my hero, {{name}}</p>',
  styles: ['p {background: LightYellow; padding: 8px}'],
})
export class PeekABooComponent
  extends PeekABooDirective
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() name: string | undefined;

  private verb = 'initalized';

  constructor(logger: LoggerService) {
    super(logger);

    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

  // only called for/if there is an @input variable set by parent
  ngOnChanges(changes: SimpleChanges) {
    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === 'name') {
        const name = changes.name.currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'changed'; // next time it will be a change
  }

  // Beware Called frequently
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() {
    this.logIt(`DoCheck`);
  }

  ngAfterContentInit() {
    this.logIt(`ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    this.logIt(`ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    this.logIt(`ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    this.logIt(`ngAfterViewChecked`);
  }

  ngOnDestroy() {
    this.logIt(`ngOnDestroy`);
  }
}
