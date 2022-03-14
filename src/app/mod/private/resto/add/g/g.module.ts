import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GRoutingModule } from './g-routing.module';
import { GComponent } from 'src/app/restos/add/addG/addG.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GComponent
  ],
  imports: [
    CommonModule,
    GRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    GComponent
  ]
})
export class GModule { }
