import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonLARoutingModule } from './button-la-routing.module';
import { ButtonLAComponent } from 'src/app/part01-reservation/buttons-delete/button-la/button-la.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonLAComponent
  ],
  imports: [
    CommonModule,
    ButtonLARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonLAComponent
  ]
})
export class ButtonLAModule { }
