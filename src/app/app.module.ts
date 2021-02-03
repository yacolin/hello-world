/*
 * @Author: xjq
 * @Date: 2021-01-05 19:10:46
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-30 13:18:03
 * @Description: app module
 * @FilePath: \hello-world\src\app\app.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LifecycleModule } from './lifecycle/lifecycle.module';
import { CommunicationModule } from './communication/communication.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import zh from '@angular/common/locales/zh';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    LifecycleModule,
    CommunicationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzDatePickerModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
