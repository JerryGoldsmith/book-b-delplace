import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonEARoutingModule } from './button-ea-routing.module';
import { ButtonEAComponent } from 'src/app/part01-reservation/buttons-delete/button-ea/button-ea.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonEAComponent
  ],
  imports: [
    CommonModule,
    ButtonEARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonEAComponent
  ]
})
export class ButtonEAModule { }
