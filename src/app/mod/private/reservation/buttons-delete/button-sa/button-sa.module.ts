import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonSARoutingModule } from './button-sa-routing.module';
import { ButtonSAComponent } from 'src/app/part01-reservation/buttons-delete/button-sa/button-sa.component';

@NgModule({
  declarations: [
    ButtonSAComponent
  ],
  imports: [
    CommonModule,
    ButtonSARoutingModule
  ],
  exports: [
    ButtonSAComponent
  ]
})
export class ButtonSAModule { }
