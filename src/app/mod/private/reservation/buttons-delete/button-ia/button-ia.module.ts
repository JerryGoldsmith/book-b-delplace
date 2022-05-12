import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonIARoutingModule } from './button-ia-routing.module';
import { ButtonIAComponent } from 'src/app/part01-reservation/buttons-delete/button-ia/button-ia.component';

@NgModule({
  declarations: [
    ButtonIAComponent
  ],
  imports: [
    CommonModule,
    ButtonIARoutingModule
  ],
  exports: [
    ButtonIAComponent
  ]
})
export class ButtonIAModule { }
