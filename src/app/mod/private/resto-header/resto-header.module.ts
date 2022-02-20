import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoHeaderRoutingModule } from './resto-header-routing.module';
import { Part01RestoHomeComponent } from 'src/app/part01-resto-home/part01-resto-home.component';


@NgModule({
  declarations: [
    Part01RestoHomeComponent
  ],
  imports: [
    CommonModule,
    RestoHeaderRoutingModule
  ],
  exports: [
    Part01RestoHomeComponent
  ]
})
export class RestoHeaderModule { }
