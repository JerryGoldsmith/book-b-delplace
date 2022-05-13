import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatsStartRoutingModule } from './seats-start-routing.module';
import { SeatsStartComponent } from 'src/app/part01-reservation/seats/seats-start/seats-start.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SeatsStartComponent
  ],
  imports: [
    CommonModule,
    SeatsStartRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SeatsStartComponent
  ]
})
export class SeatsStartModule { }
