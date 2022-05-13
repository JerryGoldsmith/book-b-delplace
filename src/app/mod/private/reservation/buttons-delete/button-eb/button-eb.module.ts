import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonEBRoutingModule } from './button-eb-routing.module';
import { ButtonEBComponent } from 'src/app/part01-reservation/buttons-delete/button-eb/button-eb.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonEBComponent
  ],
  imports: [
    CommonModule,
    ButtonEBRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonEBComponent
  ]
})
export class ButtonEBModule { }
