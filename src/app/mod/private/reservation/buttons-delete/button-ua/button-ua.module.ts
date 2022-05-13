import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonUARoutingModule } from './button-ua-routing.module';
import { ButtonUAComponent } from 'src/app/part01-reservation/buttons-delete/button-ua/button-ua.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonUAComponent
  ],
  imports: [
    CommonModule,
    ButtonUARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonUAComponent
  ]
})
export class ButtonUAModule { }
