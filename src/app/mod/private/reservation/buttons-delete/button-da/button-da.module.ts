import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonDARoutingModule } from './button-da-routing.module';
import { ButtonDAComponent } from 'src/app/part01-reservation/buttons-delete/button-da/button-da.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonDAComponent
  ],
  imports: [
    CommonModule,
    ButtonDARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonDAComponent
  ]
})
export class ButtonDAModule { }
