import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonABRoutingModule } from './button-ab-routing.module';
import { ButtonABComponent } from 'src/app/part01-reservation/buttons-delete/button-ab/button-ab.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonABComponent
  ],
  imports: [
    CommonModule,
    ButtonABRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonABComponent
  ]
})
export class ButtonABModule { }
