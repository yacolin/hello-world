/*
 * @Author: xjq
 * @Date: 2021-01-05 19:10:46
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-10 17:10:54
 * @Description: 路由
 * @FilePath: \hello-world\src\app\app-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PeekABooParentComponent } from './lifecycle/peek-a-boo-parent/peek-a-boo-parent.component';
import { SpyComponent } from './lifecycle/spy/spy.component';
import { OnChangesComponent } from './lifecycle/on-changes/on-changes.component';

const routes: Routes = [
  { path: 'peek-a-boo-parent', component: PeekABooParentComponent },
  { path: 'spy-parent', component: SpyComponent },
  { path: 'on-changes-parent', component: OnChangesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
