import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AEditionRoutingModule } from './a-edition-routing.module';
import { Part01EditionHomeComponent } from 'src/app/part01-edition-home/part01-edition-home.component';


@NgModule({
  declarations: [
    Part01EditionHomeComponent
  ],
  imports: [
    CommonModule,
    AEditionRoutingModule
  ],
  exports: [
    Part01EditionHomeComponent
  ]
})
export class AEditionModule { }
