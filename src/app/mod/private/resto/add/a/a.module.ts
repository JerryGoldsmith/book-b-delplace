import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { AComponent } from 'src/app/restos/add/addA/addA.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AComponent
  ],
  imports: [
    CommonModule,
    ARoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    AComponent
  ]
})
export class AModule { }
