import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomeRoutingModule } from './reservation-home-routing.module';
import { ReservationHomeComponent } from 'src/app/part01-reservation/reservation-home/reservation-home.component';

import { ReservationClientComponent } from 'src/app/part01-reservation/reservation-client/reservation-client.component';
import { ReservationPictureComponent } from 'src/app/part01-reservation/reservation-picture/reservation-picture.component';

// import { SeatsStartComponent } from 'src/app/part01-reservation/seats/seats-start/seats-start.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KeyValuePipeModule } from 'src/app/routing/key-value-pipe.module';
import { ValueArrayPipeModule } from 'src/app/routing/value-array-pipe.module';

// import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

@NgModule({
  declarations: [
    ReservationHomeComponent,
    ReservationClientComponent,
    ReservationPictureComponent
    // ValueArrayPipe
    // SeatsStartComponent
  ],
  imports: [
    CommonModule,
    ReservationHomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    KeyValuePipeModule,
    ValueArrayPipeModule
  ],
  exports: [
    ReservationHomeComponent,
    ReservationClientComponent,
    ReservationPictureComponent
    // ValueArrayPipe
    // SeatsStartComponent
  ]
})
export class ReservationHomeModule { }
