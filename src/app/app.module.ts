/*
 * @Author: xjq
 * @Date: 2021-01-05 19:10:46
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-10 16:14:10
 * @Description: app module
 * @FilePath: \hello-world\src\app\app.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LifecycleModule } from './lifecycle/lifecycle.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    LifecycleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
