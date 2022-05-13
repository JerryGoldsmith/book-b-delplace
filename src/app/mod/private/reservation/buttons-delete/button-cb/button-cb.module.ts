import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonCBRoutingModule } from './button-cb-routing.module';
import { ButtonCBComponent } from 'src/app/part01-reservation/buttons-delete/button-cb/button-cb.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonCBComponent
  ],
  imports: [
    CommonModule,
    ButtonCBRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonCBComponent
  ]
})
export class ButtonCBModule { }
