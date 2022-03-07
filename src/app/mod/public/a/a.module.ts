import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { Part01Component } from 'src/app/part01/part01.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    Part01Component
  ],
  imports: [
    CommonModule,
    ARoutingModule,
    LazyLoadImageModule
  ],
  exports: [
    Part01Component
  ]
})
export class AModule { }
