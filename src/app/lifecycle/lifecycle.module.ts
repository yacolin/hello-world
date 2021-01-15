/*
 * @Author: xjq
 * @Date: 2021-01-10 16:03:48
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-15 16:32:16
 * @Description: Lifecycle Module
 * @FilePath: /hello-world/src/app/lifecycle/lifecycle.module.ts
 */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PeekABooComponent } from './peek-a-boo/peek-a-boo.component';
import { PeekABooParentComponent } from './peek-a-boo-parent/peek-a-boo-parent.component';
import { SpyComponent } from './spy/spy.component';
import { SpyDirective } from './spy/spy.directive';
import { OnChangesChildComponent, OnChangesComponent } from './on-changes/on-changes.component';
import { DoCheckChildComponent, DoCheckComponent } from './do-check/do-check.component';
import { AfterViewParentComponent, AfterViewComponent, ChildViewComponent } from './after-view/after-view.component';
import { AfterContentParentComponent, AfterContentComponent, ChildComponent } from './after-content/after-content.component';
import { CounterParentComponent, MyCounterComponent } from './counter/counter.component';
import { LifecycleComponent } from './lifecycle.component';

@NgModule({
  declarations: [
    PeekABooComponent,
    PeekABooParentComponent,
    SpyComponent,
    SpyDirective,
    OnChangesChildComponent,
    OnChangesComponent,
    DoCheckChildComponent,
    DoCheckComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent,
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    CounterParentComponent,
    MyCounterComponent,
    LifecycleComponent,
  ],
  imports: [CommonModule, FormsModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class LifecycleModule {}
