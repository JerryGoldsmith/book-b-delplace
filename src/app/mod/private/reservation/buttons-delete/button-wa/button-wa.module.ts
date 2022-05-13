import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonWARoutingModule } from './button-wa-routing.module';
import { ButtonWAComponent } from 'src/app/part01-reservation/buttons-delete/button-wa/button-wa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonWAComponent
  ],
  imports: [
    CommonModule,
    ButtonWARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonWAComponent
  ]
})
export class ButtonWAModule { }
