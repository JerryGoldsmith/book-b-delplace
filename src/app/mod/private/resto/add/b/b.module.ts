import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { BComponent } from 'src/app/restos/add/addB/addB.component';

@NgModule({
  declarations: [
    BComponent
  ],
  imports: [
    CommonModule,
    BRoutingModule
  ],
  exports: [
    BComponent
  ]
})
export class BModule { }
