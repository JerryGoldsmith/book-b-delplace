import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DRoutingModule } from './d-routing.module';
import { Part04Component } from 'src/app/part04/part04.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    Part04Component
  ],
  imports: [
    CommonModule,
    DRoutingModule,
    LazyLoadImageModule
  ],
  exports: [
    Part04Component
  ]
})
export class DModule { }
