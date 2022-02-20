import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FRoutingModule } from './f-routing.module';
import { FComponent } from 'src/app/restos/add/addF/addF.component';

@NgModule({
  declarations: [
    FComponent
  ],
  imports: [
    CommonModule,
    FRoutingModule
  ],
  exports: [
    FComponent
  ]
})
export class FModule { }
