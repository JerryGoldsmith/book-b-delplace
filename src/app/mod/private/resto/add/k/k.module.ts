import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KRoutingModule } from './k-routing.module';
import { KComponent } from 'src/app/restos/add/addK/addK.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    KComponent
  ],
  imports: [
    CommonModule,
    KRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    KComponent
  ]
})
export class KModule { }
