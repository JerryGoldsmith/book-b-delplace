import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatsRoutingModule } from './seats-routing.module';
import { SeatsComponent } from 'src/app/part01-reservation/seats/seats/seats.component';

@NgModule({
  declarations: [
    SeatsComponent
  ],
  imports: [
    CommonModule,
    SeatsRoutingModule
  ],
  exports: [
    SeatsComponent
  ]
})
export class SeatsModule { }
