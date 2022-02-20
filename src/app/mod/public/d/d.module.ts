import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DRoutingModule } from './d-routing.module';
import { Part04Component } from 'src/app/part04/part04.component';


@NgModule({
  declarations: [
    Part04Component
  ],
  imports: [
    CommonModule,
    DRoutingModule
  ],
  exports: [
    Part04Component
  ]
})
export class DModule { }
