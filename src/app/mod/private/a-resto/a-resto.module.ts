import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { ARestoRoutingModule } from './a-resto-routing.module';
import { Part01RestoHomeComponent } from 'src/app/part01-resto-home/part01-resto-home.component';


@NgModule({
  declarations: [
    Part01RestoHomeComponent
  ],
  imports: [
    CommonModule,
    ARestoRoutingModule,
    LazyLoadImageModule
  ],
  exports: [
    Part01RestoHomeComponent
  ]
})
export class ARestoModule { }
