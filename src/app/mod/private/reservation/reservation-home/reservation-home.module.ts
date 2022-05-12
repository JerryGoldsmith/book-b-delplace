import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomeRoutingModule } from './reservation-home-routing.module';
import { ReservationHomeComponent } from 'src/app/part01-reservation/reservation-home/reservation-home.component';

@NgModule({
  declarations: [
    ReservationHomeComponent
  ],
  imports: [
    CommonModule,
    ReservationHomeRoutingModule
  ]
})
export class ReservationHomeModule { }
