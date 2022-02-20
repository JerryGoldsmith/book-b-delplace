import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { Part01Component } from 'src/app/part01/part01.component';

@NgModule({
  declarations: [
    Part01Component
  ],
  imports: [
    CommonModule,
    ARoutingModule
  ],
  exports: [
    Part01Component
  ]
})
export class AModule { }
