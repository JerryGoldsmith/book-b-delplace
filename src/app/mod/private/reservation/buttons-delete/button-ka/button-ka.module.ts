import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonKARoutingModule } from './button-ka-routing.module';
import { ButtonKAComponent } from 'src/app/part01-reservation/buttons-delete/button-ka/button-ka.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonKAComponent
  ],
  imports: [
    CommonModule,
    ButtonKARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonKAComponent
  ]
})
export class ButtonKAModule { }
