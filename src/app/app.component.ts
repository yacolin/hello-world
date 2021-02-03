/*
 * @Author: xjq
 * @Date: 2021-01-05 19:10:46
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-30 13:36:59
 * @Description: app component
 * @FilePath: \hello-world\src\app\app.component.ts
 */
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hello-world';

  date = new Date();
  dateArr: string[] = [];
  disabledDate: any;

  ngOnInit() {
    this.getDateArr();
  }

  getDateArr() {
    setTimeout(() => {
      const _dateArr = moment(new Date()).format('YYYY-MM-DD');
      this.dateArr = [_dateArr];
      this.disabledDate = (current: Date): boolean => {
        const flag = this.dateArr.includes(
          moment(current).format('YYYY-MM-DD')
        );
        console.log(current, flag);
        return !flag;
      };
    }, 3000);
  }
}
