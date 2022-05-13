import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatsRoutingModule } from './seats-routing.module';
import { SeatsComponent } from 'src/app/part01-reservation/seats/seats/seats.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SeatsComponent
  ],
  imports: [
    CommonModule,
    SeatsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SeatsComponent
  ]
})
export class SeatsModule { }
