import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LRoutingModule } from './l-routing.module';
import { LComponent } from 'src/app/restos/add/addL/addL.component';

@NgModule({
  declarations: [
    LComponent
  ],
  imports: [
    CommonModule,
    LRoutingModule
  ],
  exports: [
    LComponent
  ]
})
export class LModule { }
