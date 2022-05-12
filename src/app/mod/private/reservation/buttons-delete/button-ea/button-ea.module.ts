import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonEARoutingModule } from './button-ea-routing.module';
import { ButtonEAComponent } from 'src/app/part01-reservation/buttons-delete/button-ea/button-ea.component';

@NgModule({
  declarations: [
    ButtonEAComponent
  ],
  imports: [
    CommonModule,
    ButtonEARoutingModule
  ],
  exports: [
    ButtonEAComponent
  ]
})
export class ButtonEAModule { }
