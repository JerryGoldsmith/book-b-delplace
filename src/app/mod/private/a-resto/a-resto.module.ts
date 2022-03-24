import { NgModule } from '@angular/core';
import { ARestoRoutingModule } from './a-resto-routing.module';

import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  imports: [
    ARestoRoutingModule,
    LazyLoadImageModule
  ],
  exports: []
})
export class ARestoModule { }
