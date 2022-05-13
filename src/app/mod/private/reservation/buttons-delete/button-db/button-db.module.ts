import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonDBRoutingModule } from './button-db-routing.module';
import { ButtonDBComponent } from 'src/app/part01-reservation/buttons-delete/button-db/button-db.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonDBComponent
  ],
  imports: [
    CommonModule,
    ButtonDBRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonDBComponent
  ]
})
export class ButtonDBModule { }
