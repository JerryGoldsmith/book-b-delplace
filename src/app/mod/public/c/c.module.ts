import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRoutingModule } from './c-routing.module';
import { CComponent } from './c/c.component';


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
