import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonPARoutingModule } from './button-pa-routing.module';
import { ButtonPAComponent } from 'src/app/part01-reservation/buttons-delete/button-pa/button-pa.component';

@NgModule({
  declarations: [
    ButtonPAComponent
  ],
  imports: [
    CommonModule,
    ButtonPARoutingModule
  ],
  exports: [
    ButtonPAComponent
  ]
})
export class ButtonPAModule { }
