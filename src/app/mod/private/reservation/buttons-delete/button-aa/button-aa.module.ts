import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonAARoutingModule } from './button-aa-routing.module';
import { ButtonAAComponent } from 'src/app/part01-reservation/buttons-delete/button-aa/button-aa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonAAComponent
  ],
  imports: [
    CommonModule,
    ButtonAARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonAAComponent
  ]
})
export class ButtonAAModule { }
