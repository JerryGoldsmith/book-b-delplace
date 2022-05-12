import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonFBRoutingModule } from './button-fb-routing.module';
import { ButtonFBComponent } from 'src/app/part01-reservation/buttons-delete/button-fb/button-fb.component';

@NgModule({
  declarations: [
    ButtonFBComponent
  ],
  imports: [
    CommonModule,
    ButtonFBRoutingModule
  ],
  exports: [
    ButtonFBComponent
  ]
})
export class ButtonFBModule { }
