import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonCBRoutingModule } from './button-cb-routing.module';
import { ButtonCBComponent } from 'src/app/part01-reservation/buttons-delete/button-cb/button-cb.component';

@NgModule({
  declarations: [
    ButtonCBComponent
  ],
  imports: [
    CommonModule,
    ButtonCBRoutingModule
  ],
  exports: [
    ButtonCBComponent
  ]
})
export class ButtonCBModule { }
