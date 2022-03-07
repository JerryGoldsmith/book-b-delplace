import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { Part01Component } from 'src/app/part01/part01.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
// import { FooterComponent } from 'src/app/footer/footer.component';


@NgModule({
  declarations: [
    Part01Component
  ],
  imports: [
    CommonModule,
    ARoutingModule,
    LazyLoadImageModule
    // FooterComponent
  ],
  exports: [
    Part01Component
  ]
})
export class AModule { }
