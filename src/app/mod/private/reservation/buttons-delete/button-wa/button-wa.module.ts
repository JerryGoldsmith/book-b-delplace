import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonWARoutingModule } from './button-wa-routing.module';
import { ButtonWAComponent } from 'src/app/part01-reservation/buttons-delete/button-wa/button-wa.component';

@NgModule({
  declarations: [
    ButtonWAComponent
  ],
  imports: [
    CommonModule,
    ButtonWARoutingModule
  ],
  exports: [
    ButtonWAComponent
  ]
})
export class ButtonWAModule { }
