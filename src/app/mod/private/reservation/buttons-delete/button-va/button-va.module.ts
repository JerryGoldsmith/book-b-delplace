import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonVARoutingModule } from './button-va-routing.module';
import { ButtonVAComponent } from 'src/app/part01-reservation/buttons-delete/button-va/button-va.component';

@NgModule({
  declarations: [
    ButtonVAComponent
  ],
  imports: [
    CommonModule,
    ButtonVARoutingModule
  ],
  exports: [
    ButtonVAComponent
  ]
})
export class ButtonVAModule { }
