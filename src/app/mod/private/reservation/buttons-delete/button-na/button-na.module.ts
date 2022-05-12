import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonNARoutingModule } from './button-na-routing.module';
import { ButtonNAComponent } from 'src/app/part01-reservation/buttons-delete/button-na/button-na.component';

@NgModule({
  declarations: [
    ButtonNAComponent
  ],
  imports: [
    CommonModule,
    ButtonNARoutingModule
  ],
  exports: [
    ButtonNAComponent
  ]
})
export class ButtonNAModule { }
