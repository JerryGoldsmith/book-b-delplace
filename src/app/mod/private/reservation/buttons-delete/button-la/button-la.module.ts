import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonLARoutingModule } from './button-la-routing.module';
import { ButtonLAComponent } from 'src/app/part01-reservation/buttons-delete/button-la/button-la.component';

@NgModule({
  declarations: [
    ButtonLAComponent
  ],
  imports: [
    CommonModule,
    ButtonLARoutingModule
  ],
  exports: [
    ButtonLAComponent
  ]
})
export class ButtonLAModule { }
