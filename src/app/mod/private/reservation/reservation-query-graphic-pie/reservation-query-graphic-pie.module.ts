import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomeQueryGraphicPieRoutingModule } from './reservation-query-graphic-pie-routing.module';
import { ReservationQueryGraphicPieComponent } from 'src/app/part01-reservation/reservation-query-graphic-pie/reservation-query-graphic-pie.component';

@NgModule({
  declarations: [
    ReservationQueryGraphicPieComponent
  ],
  imports: [
    CommonModule,
    ReservationHomeQueryGraphicPieRoutingModule
  ],
  exports: [
    ReservationQueryGraphicPieComponent
  ]
})
export class ReservationHomeQueryGraphicPieModule { }
