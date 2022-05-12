import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonTARoutingModule } from './button-ta-routing.module';
import { ButtonTAComponent } from 'src/app/part01-reservation/buttons-delete/button-ta/button-ta.component';

@NgModule({
  declarations: [
    ButtonTAComponent
  ],
  imports: [
    CommonModule,
    ButtonTARoutingModule
  ],
  exports: [
    ButtonTAComponent
  ]
})
export class ButtonTAModule { }
