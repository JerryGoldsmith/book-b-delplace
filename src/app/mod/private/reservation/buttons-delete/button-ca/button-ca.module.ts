import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonCARoutingModule } from './button-ca-routing.module';
import { ButtonCAComponent } from 'src/app/part01-reservation/buttons-delete/button-ca/button-ca.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonCAComponent
  ],
  imports: [
    CommonModule,
    ButtonCARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonCAComponent
  ]
})
export class ButtonCAModule { }
