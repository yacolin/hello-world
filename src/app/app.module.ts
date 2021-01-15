/*
 * @Author: xjq
 * @Date: 2021-01-05 19:10:46
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-15 17:23:24
 * @Description: app module
 * @FilePath: /hello-world/src/app/app.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LifecycleModule } from './lifecycle/lifecycle.module';
import { CommunicationModule } from './communication/communication.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
  AppComponent,
  PageNotFoundComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    LifecycleModule,
    CommunicationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
