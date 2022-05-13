import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonIARoutingModule } from './button-ia-routing.module';
import { ButtonIAComponent } from 'src/app/part01-reservation/buttons-delete/button-ia/button-ia.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonIAComponent
  ],
  imports: [
    CommonModule,
    ButtonIARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonIAComponent
  ]
})
export class ButtonIAModule { }
