import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRoutingModule } from './h-routing.module';
import { HComponent } from 'src/app/restos/add/addH/addH.component';

@NgModule({
  declarations: [
    HComponent
  ],
  imports: [
    CommonModule,
    HRoutingModule
  ],
  exports: [
    HComponent
  ]
})
export class HModule { }
