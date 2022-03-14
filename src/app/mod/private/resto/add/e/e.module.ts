import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ERoutingModule } from './e-routing.module';
import { EComponent } from 'src/app/restos/add/addE/addE.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EComponent
  ],
  imports: [
    CommonModule,
    ERoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    EComponent
  ]
})
export class EModule { }
