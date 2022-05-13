import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonVARoutingModule } from './button-va-routing.module';
import { ButtonVAComponent } from 'src/app/part01-reservation/buttons-delete/button-va/button-va.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonVAComponent
  ],
  imports: [
    CommonModule,
    ButtonVARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonVAComponent
  ]
})
export class ButtonVAModule { }
