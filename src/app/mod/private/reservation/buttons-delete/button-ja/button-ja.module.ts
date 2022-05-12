import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonJARoutingModule } from './button-ja-routing.module';
import { ButtonJAComponent } from 'src/app/part01-reservation/buttons-delete/button-ja/button-ja.component';

@NgModule({
  declarations: [
    ButtonJAComponent
  ],
  imports: [
    CommonModule,
    ButtonJARoutingModule
  ],
  exports: [
    ButtonJAComponent
  ]
})
export class ButtonJAModule { }
