import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationClientRoutingModule } from './reservation-client-routing.module';
import { ReservationClientComponent } from 'src/app/part01-reservation/reservation-client/reservation-client.component';

import { SeatsStartComponent } from 'src/app/part01-reservation/seats/seats-start/seats-start.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KeyValuePipeModule } from 'src/app/routing/key-value-pipe.module';
import { ValueArrayPipeModule } from 'src/app/routing/value-array-pipe.module';

// import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

@NgModule({
  declarations: [
    ReservationClientComponent,
    SeatsStartComponent
    // ValueArrayPipe
  ],
  imports: [
    CommonModule,
    ReservationClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    KeyValuePipeModule,
    ValueArrayPipeModule
  ],
  exports: [
    ReservationClientComponent,
    SeatsStartComponent
    // ValueArrayPipe
  ]
})
export class ReservationClientModule { }
