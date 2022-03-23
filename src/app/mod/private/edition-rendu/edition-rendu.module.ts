import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { EditionRenduRoutingModule } from './edition-rendu-routing.module';
import { Part01EditionHomeComponent } from 'src/app/part01-edition-home/part01-edition-home.component';


@NgModule({
  declarations: [
    Part01EditionHomeComponent
  ],
  imports: [
    CommonModule,
    EditionRenduRoutingModule
  ],
  exports: [
    Part01EditionHomeComponent
  ]
})
export class EditionRenduModule { }
