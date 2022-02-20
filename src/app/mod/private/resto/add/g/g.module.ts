import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GRoutingModule } from './g-routing.module';
import { GComponent } from 'src/app/restos/add/addG/addG.component';

@NgModule({
  declarations: [
    GComponent
  ],
  imports: [
    CommonModule,
    GRoutingModule
  ],
  exports: [
    GComponent
  ]
})
export class GModule { }
