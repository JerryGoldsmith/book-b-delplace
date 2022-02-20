import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ERoutingModule } from './e-routing.module';
import { EComponent } from './e/e.component';


@NgModule({
  declarations: [
    EComponent
  ],
  imports: [
    CommonModule,
    ERoutingModule
  ],
  exports: [
    EComponent
  ]
})
export class EModule { }
