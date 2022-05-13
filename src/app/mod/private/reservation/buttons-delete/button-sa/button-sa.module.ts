import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonSARoutingModule } from './button-sa-routing.module';
import { ButtonSAComponent } from 'src/app/part01-reservation/buttons-delete/button-sa/button-sa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonSAComponent
  ],
  imports: [
    CommonModule,
    ButtonSARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonSAComponent
  ]
})
export class ButtonSAModule { }
