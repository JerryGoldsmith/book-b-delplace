import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonKARoutingModule } from './button-ka-routing.module';
import { ButtonKAComponent } from 'src/app/part01-reservation/buttons-delete/button-ka/button-ka.component';

@NgModule({
  declarations: [
    ButtonKAComponent
  ],
  imports: [
    CommonModule,
    ButtonKARoutingModule
  ],
  exports: [
    ButtonKAComponent
  ]
})
export class ButtonKAModule { }
