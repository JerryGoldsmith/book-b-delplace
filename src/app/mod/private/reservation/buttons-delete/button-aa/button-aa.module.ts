import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonAARoutingModule } from './button-aa-routing.module';
import { ButtonAAComponent } from 'src/app/part01-reservation/buttons-delete/button-aa/button-aa.component';

@NgModule({
  declarations: [
    ButtonAAComponent
  ],
  imports: [
    CommonModule,
    ButtonAARoutingModule
  ],
  exports: [
    ButtonAAComponent
  ]
})
export class ButtonAAModule { }
