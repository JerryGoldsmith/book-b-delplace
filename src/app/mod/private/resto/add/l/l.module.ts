import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LRoutingModule } from './l-routing.module';
import { LComponent } from 'src/app/restos/add/addL/addL.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LComponent
  ],
  imports: [
    CommonModule,
    LRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    LComponent
  ]
})
export class LModule { }
