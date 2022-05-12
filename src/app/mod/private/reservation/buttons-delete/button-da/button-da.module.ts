import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonDARoutingModule } from './button-da-routing.module';
import { ButtonDAComponent } from 'src/app/part01-reservation/buttons-delete/button-da/button-da.component';

@NgModule({
  declarations: [
    ButtonDAComponent
  ],
  imports: [
    CommonModule,
    ButtonDARoutingModule
  ],
  exports: [
    ButtonDAComponent
  ]
})
export class ButtonDAModule { }
