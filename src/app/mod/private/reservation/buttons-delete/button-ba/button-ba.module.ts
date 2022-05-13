import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonBARoutingModule } from './button-ba-routing.module';
import { ButtonBAComponent } from 'src/app/part01-reservation/buttons-delete/button-ba/button-ba.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonBAComponent
  ],
  imports: [
    CommonModule,
    ButtonBARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonBAComponent
  ]
})
export class ButtonBAModule { }
