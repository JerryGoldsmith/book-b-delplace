import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KRoutingModule } from './k-routing.module';
import { KComponent } from 'src/app/restos/add/addK/addK.component';

@NgModule({
  declarations: [
    KComponent
  ],
  imports: [
    CommonModule,
    KRoutingModule
  ],
  exports: [
    KComponent
  ]
})
export class KModule { }
