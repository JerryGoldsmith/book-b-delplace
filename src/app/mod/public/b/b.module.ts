import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { Part02Component } from 'src/app/part02/part02.component';


@NgModule({
  declarations: [
    Part02Component
  ],
  imports: [
    CommonModule,
    BRoutingModule
  ],
  exports: [
    Part02Component
  ]
})
export class BModule { }
