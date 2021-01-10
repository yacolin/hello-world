/*
 * @Author: xjq
 * @Date: 2021-01-10 16:03:48
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-10 16:49:17
 * @Description: Lifecycle Module
 * @FilePath: \hello-world\src\app\lifecycle\lifecycle.module.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PeekABooComponent } from './peek-a-boo/peek-a-boo.component';
import { PeekABooParentComponent } from './peek-a-boo-parent/peek-a-boo-parent.component';
import { SpyComponent } from './spy/spy.component';
import { SpyDirective } from './spy/spy.directive';
import { OnChangesComponent } from './on-changes/on-changes.component';

@NgModule({
  declarations: [
    PeekABooComponent,
    PeekABooParentComponent,
    SpyComponent,
    SpyDirective,
    OnChangesComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class LifecycleModule {}
