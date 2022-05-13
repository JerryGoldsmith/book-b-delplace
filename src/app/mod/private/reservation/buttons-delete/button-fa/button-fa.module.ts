import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonFARoutingModule } from './button-fa-routing.module';
import { ButtonFAComponent } from 'src/app/part01-reservation/buttons-delete/button-fa/button-fa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonFAComponent
  ],
  imports: [
    CommonModule,
    ButtonFARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonFAComponent
  ]
})
export class ButtonFAModule { }
