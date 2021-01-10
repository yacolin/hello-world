/*
 * @Author: xjq
 * @Date: 2021-01-10 13:14:22
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-10 13:20:09
 * @Description: logger service
 * @FilePath: \hello-world\src\app\logger.service.ts
 */
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logs: string[] = [];
  prevMsg = '';
  prevMsgCount = 1;

  log(msg: string) {
    if (msg === this.prevMsg) {
      // Repeat message; update last log entry with count.
      this.logs[this.logs.length - 1] = msg + ` (${(this.prevMsgCount += 1)}x)`;
    } else {
      // New message; log it.
      this.prevMsg = msg;
      this.prevMsgCount = 1;
      this.logs.push(msg);
    }
  }

  clear() {
    this.logs = [];
  }

  tick() {
    this.tick_then(() => { })
  }

  tick_then(fn: () => any) {
    setTimeout(fn, 0)
  }
}
