import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomeRoutingModule } from './reservation-home-routing.module';
import { ReservationHomeComponent } from 'src/app/part01-reservation/reservation-home/reservation-home.component';

import { ReservationClientComponent } from 'src/app/part01-reservation/reservation-client/reservation-client.component';
import { ReservationPictureComponent } from 'src/app/part01-reservation/reservation-picture/reservation-picture.component';

@NgModule({
  declarations: [
    ReservationHomeComponent,
    ReservationClientComponent,
    ReservationPictureComponent
  ],
  imports: [
    CommonModule,
    ReservationHomeRoutingModule
  ],
  exports: [
    ReservationHomeComponent,
    ReservationClientComponent,
    ReservationPictureComponent
  ]
})
export class ReservationHomeModule { }
