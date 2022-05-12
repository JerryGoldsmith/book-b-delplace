import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonEBRoutingModule } from './button-eb-routing.module';
import { ButtonEBComponent } from 'src/app/part01-reservation/buttons-delete/button-eb/button-eb.component';

@NgModule({
  declarations: [
    ButtonEBComponent
  ],
  imports: [
    CommonModule,
    ButtonEBRoutingModule
  ],
  exports: [
    ButtonEBComponent
  ]
})
export class ButtonEBModule { }
