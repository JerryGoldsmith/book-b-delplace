import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRoutingModule } from './c-routing.module';
import { CComponent } from 'src/app/restos/add/addC/addC.component';

@NgModule({
  declarations: [
    CComponent
  ],
  imports: [
    CommonModule,
    CRoutingModule
  ],
  exports: [
    CComponent
  ]
})
export class CModule { }
