import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { BComponent } from 'src/app/restos/add/addB/addB.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BComponent
  ],
  imports: [
    CommonModule,
    BRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    BComponent
  ]
})
export class BModule { }
