import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRoutingModule } from './c-routing.module';
import { Part03Component } from 'src/app/part03/part03.component';


@NgModule({
  declarations: [
    Part03Component
  ],
  imports: [
    CommonModule,
    CRoutingModule
  ],
  exports: [
    Part03Component
  ]
})
export class CModule { }
