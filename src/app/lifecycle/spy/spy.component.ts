/*
 * @Author: xjq
 * @Date: 2021-01-10 16:29:14
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-10 16:44:21
 * @Description: spy component
 * @FilePath: \hello-world\src\app\lifecycle\spy\spy.component.ts
 */
import { Component } from '@angular/core';
import { LoggerService } from '../../logger.service';

@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.scss'],
  providers: [LoggerService],
})
export class SpyComponent {
  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];

  constructor(public logger: LoggerService) {}

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }

  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.logger.tick();
  }

  reset() {
    this.logger.log('-- reset --');
    this.heroes = [];
    this.logger.tick();
  }
}
