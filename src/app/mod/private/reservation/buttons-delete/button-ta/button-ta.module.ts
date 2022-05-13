import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonTARoutingModule } from './button-ta-routing.module';
import { ButtonTAComponent } from 'src/app/part01-reservation/buttons-delete/button-ta/button-ta.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonTAComponent
  ],
  imports: [
    CommonModule,
    ButtonTARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonTAComponent
  ]
})
export class ButtonTAModule { }
