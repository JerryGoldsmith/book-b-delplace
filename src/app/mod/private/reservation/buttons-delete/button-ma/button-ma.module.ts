import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonMARoutingModule } from './button-ma-routing.module';
import { ButtonMAComponent } from 'src/app/part01-reservation/buttons-delete/button-ma/button-ma.component';

@NgModule({
  declarations: [
    ButtonMAComponent
  ],
  imports: [
    CommonModule,
    ButtonMARoutingModule
  ],
  exports: [
    ButtonMAComponent
  ]
})
export class ButtonMAModule { }
