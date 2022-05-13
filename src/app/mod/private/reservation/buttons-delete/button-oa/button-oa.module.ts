import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonOARoutingModule } from './button-oa-routing.module';
import { ButtonOAComponent } from 'src/app/part01-reservation/buttons-delete/button-oa/button-oa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonOAComponent
  ],
  imports: [
    CommonModule,
    ButtonOARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonOAComponent
  ]
})
export class ButtonOAModule { }
