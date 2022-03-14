import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DRoutingModule } from './d-routing.module';
import { DComponent } from 'src/app/restos/add/addD/addD.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DComponent
  ],
  imports: [
    CommonModule,
    DRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    DComponent
  ]
})
export class DModule { }
