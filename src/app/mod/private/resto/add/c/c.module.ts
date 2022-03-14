import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRoutingModule } from './c-routing.module';
import { CComponent } from 'src/app/restos/add/addC/addC.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CComponent
  ],
  imports: [
    CommonModule,
    CRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    CComponent
  ]
})
export class CModule { }
