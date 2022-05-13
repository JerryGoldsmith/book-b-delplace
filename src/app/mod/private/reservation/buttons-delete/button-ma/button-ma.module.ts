import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonMARoutingModule } from './button-ma-routing.module';
import { ButtonMAComponent } from 'src/app/part01-reservation/buttons-delete/button-ma/button-ma.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonMAComponent
  ],
  imports: [
    CommonModule,
    ButtonMARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonMAComponent
  ]
})
export class ButtonMAModule { }
