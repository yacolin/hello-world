/*
 * @Author: xjq
 * @Date: 2021-01-05 19:10:46
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-15 17:23:59
 * @Description: 路由
 * @FilePath: /hello-world/src/app/app-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CommunicationComponent } from './communication/communication.component';

const routes: Routes = [
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
