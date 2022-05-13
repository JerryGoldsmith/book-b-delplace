import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonBBRoutingModule } from './button-bb-routing.module';
import { ButtonBBComponent } from 'src/app/part01-reservation/buttons-delete/button-bb/button-bb.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonBBComponent
  ],
  imports: [
    CommonModule,
    ButtonBBRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonBBComponent
  ]
})
export class ButtonBBModule { }
