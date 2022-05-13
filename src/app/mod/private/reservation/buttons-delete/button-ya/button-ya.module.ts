import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonYARoutingModule } from './button-ya-routing.module';
import { ButtonYAComponent } from 'src/app/part01-reservation/buttons-delete/button-ya/button-ya.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonYAComponent
  ],
  imports: [
    CommonModule,
    ButtonYARoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonYAComponent
  ]
})
export class ButtonYAModule { }
