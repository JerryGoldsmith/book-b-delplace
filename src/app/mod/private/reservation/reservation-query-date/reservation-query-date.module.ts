import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationQueryDateRoutingModule } from './reservation-query-date-routing.module';
import { ReservationQueryDateComponent } from 'src/app/part01-reservation/reservation-query-date/reservation-query-date.component';

@NgModule({
  declarations: [
    ReservationQueryDateComponent
  ],
  imports: [
    CommonModule,
    ReservationQueryDateRoutingModule
  ],
  exports: [
    ReservationQueryDateComponent
  ]
})
export class ReservationQueryDateModule { }
