import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonXARoutingModule } from './button-xa-routing.module';
import { ButtonXAComponent } from 'src/app/part01-reservation/buttons-delete/button-xa/button-xa.component';

@NgModule({
  declarations: [
    ButtonXAComponent
  ],
  imports: [
    CommonModule,
    ButtonXARoutingModule
  ],
  exports: [
    ButtonXAComponent
  ]
})
export class ButtonXAModule { }
