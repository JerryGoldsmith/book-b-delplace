import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonFBRoutingModule } from './button-fb-routing.module';
import { ButtonFBComponent } from 'src/app/part01-reservation/buttons-delete/button-fb/button-fb.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonFBComponent
  ],
  imports: [
    CommonModule,
    ButtonFBRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonFBComponent
  ]
})
export class ButtonFBModule { }
