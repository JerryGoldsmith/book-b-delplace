import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonQARoutingModule } from './button-qa-routing.module';
import { ButtonQAComponent } from 'src/app/part01-reservation/buttons-delete/button-qa/button-qa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonQAComponent
  ],
  imports: [
    CommonModule,
    ButtonQARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonQAComponent
  ]
})
export class ButtonQAModule { }
