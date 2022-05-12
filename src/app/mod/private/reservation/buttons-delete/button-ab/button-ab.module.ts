import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonABRoutingModule } from './button-ab-routing.module';
import { ButtonABComponent } from 'src/app/part01-reservation/buttons-delete/button-ab/button-ab.component';

@NgModule({
  declarations: [
    ButtonABComponent
  ],
  imports: [
    CommonModule,
    ButtonABRoutingModule
  ],
  exports: [
    ButtonABComponent
  ]
})
export class ButtonABModule { }
