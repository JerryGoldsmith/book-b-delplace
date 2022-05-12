import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonGARoutingModule } from './button-ga-routing.module';
import { ButtonGAComponent } from 'src/app/part01-reservation/buttons-delete/button-ga/button-ga.component';

@NgModule({
  declarations: [
    ButtonGAComponent
  ],
  imports: [
    CommonModule,
    ButtonGARoutingModule
  ],
  exports: [
    ButtonGAComponent
  ]
})
export class ButtonGAModule { }
