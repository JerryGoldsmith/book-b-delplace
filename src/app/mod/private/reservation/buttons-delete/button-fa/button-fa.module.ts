import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonFARoutingModule } from './button-fa-routing.module';
import { ButtonFAComponent } from 'src/app/part01-reservation/buttons-delete/button-fa/button-fa.component';

@NgModule({
  declarations: [
    ButtonFAComponent
  ],
  imports: [
    CommonModule,
    ButtonFARoutingModule
  ],
  exports: [
    ButtonFAComponent
  ]
})
export class ButtonFAModule { }
