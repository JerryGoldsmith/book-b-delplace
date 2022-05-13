import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonPARoutingModule } from './button-pa-routing.module';
import { ButtonPAComponent } from 'src/app/part01-reservation/buttons-delete/button-pa/button-pa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonPAComponent
  ],
  imports: [
    CommonModule,
    ButtonPARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonPAComponent
  ]
})
export class ButtonPAModule { }
