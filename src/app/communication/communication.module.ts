/*
 * @Author: xjq
 * @Date: 2021-01-15 15:27:17
 * @LastEditors: xjq
 * @LastEditTime: 2021-01-15 18:36:14
 * @Description: 
 * @FilePath: /hello-world/src/app/communication/communication.module.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationComponent } from './communication.component';

import { HeroChildComponent } from './hero/hero-child.component';
import { HeroParentComponent } from './hero/hero-parent.component';
import { NameChildComponent } from './name/name-child.component';
import { NameParentComponent } from './name/name-parent.compoent';
import { VersionChildComponent } from './version/version-child.component';
import { VersionParentComponent } from './version/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VoteTakerComponent } from './voter/votertaker.component';



@NgModule({
  declarations: [
    CommunicationComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class CommunicationModule { }
