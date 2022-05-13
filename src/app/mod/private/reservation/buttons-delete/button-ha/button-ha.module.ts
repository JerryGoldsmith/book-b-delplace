import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonHARoutingModule } from './button-ha-routing.module';
import { ButtonHAComponent } from 'src/app/part01-reservation/buttons-delete/button-ha/button-ha.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonHAComponent
  ],
  imports: [
    CommonModule,
    ButtonHARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonHAComponent
  ]
})
export class ButtonHAModule { }
