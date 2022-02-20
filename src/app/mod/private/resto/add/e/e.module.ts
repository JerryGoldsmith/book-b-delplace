import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ERoutingModule } from './e-routing.module';
import { EComponent } from 'src/app/restos/add/addE/addE.component';

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
