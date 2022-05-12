import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonZARoutingModule } from './button-za-routing.module';
import { ButtonZAComponent } from 'src/app/part01-reservation/buttons-delete/button-za/button-za.component';

@NgModule({
  declarations: [
    ButtonZAComponent
  ],
  imports: [
    CommonModule,
    ButtonZARoutingModule
  ],
  exports: [
    ButtonZAComponent
  ]
})
export class ButtonZAModule { }
