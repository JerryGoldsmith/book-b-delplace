import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonUARoutingModule } from './button-ua-routing.module';
import { ButtonUAComponent } from 'src/app/part01-reservation/buttons-delete/button-ua/button-ua.component';

@NgModule({
  declarations: [
    ButtonUAComponent
  ],
  imports: [
    CommonModule,
    ButtonUARoutingModule
  ],
  exports: [
    ButtonUAComponent
  ]
})
export class ButtonUAModule { }
