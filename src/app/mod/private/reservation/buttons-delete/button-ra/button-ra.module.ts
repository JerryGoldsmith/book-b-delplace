import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRARoutingModule } from './button-ra-routing.module';
import { ButtonRAComponent } from 'src/app/part01-reservation/buttons-delete/button-ra/button-ra.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonRAComponent
  ],
  imports: [
    CommonModule,
    ButtonRARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonRAComponent
  ]
})
export class ButtonRAModule { }
