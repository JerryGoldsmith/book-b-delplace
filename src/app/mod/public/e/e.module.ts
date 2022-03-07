import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ERoutingModule } from './e-routing.module';
import { EComponent } from './e/e.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    EComponent
  ],
  imports: [
    CommonModule,
    ERoutingModule,
    LazyLoadImageModule
  ],
  exports: [
    EComponent
  ]
})
export class EModule { }
