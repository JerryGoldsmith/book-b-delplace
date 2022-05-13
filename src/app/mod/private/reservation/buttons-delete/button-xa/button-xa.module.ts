import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonXARoutingModule } from './button-xa-routing.module';
import { ButtonXAComponent } from 'src/app/part01-reservation/buttons-delete/button-xa/button-xa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonXAComponent
  ],
  imports: [
    CommonModule,
    ButtonXARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonXAComponent
  ]
})
export class ButtonXAModule { }
