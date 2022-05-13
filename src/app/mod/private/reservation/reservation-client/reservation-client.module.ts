import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationClientRoutingModule } from './reservation-client-routing.module';
import { ReservationClientComponent } from 'src/app/part01-reservation/reservation-client/reservation-client.component';

import { SeatsStartComponent } from 'src/app/part01-reservation/seats/seats-start/seats-start.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReservationClientComponent,
    SeatsStartComponent
  ],
  imports: [
    CommonModule,
    ReservationClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ReservationClientComponent,
    SeatsStartComponent
  ]
})
export class ReservationClientModule { }
