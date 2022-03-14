import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRoutingModule } from './h-routing.module';
import { HComponent } from 'src/app/restos/add/addH/addH.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HComponent
  ],
  imports: [
    CommonModule,
    HRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    HComponent
  ]
})
export class HModule { }
