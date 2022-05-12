import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonQARoutingModule } from './button-qa-routing.module';
import { ButtonQAComponent } from 'src/app/part01-reservation/buttons-delete/button-qa/button-qa.component';

@NgModule({
  declarations: [
    ButtonQAComponent
  ],
  imports: [
    CommonModule,
    ButtonQARoutingModule
  ],
  exports: [
    ButtonQAComponent
  ]
})
export class ButtonQAModule { }
