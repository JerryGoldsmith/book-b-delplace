import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationQueryGraphicBarRoutingModule } from './reservation-query-graphic-bar-routing.module';
import { ReservationQueryGraphicBarComponent } from 'src/app/part01-reservation/reservation-query-graphic-bar/reservation-query-graphic-bar.component';

@NgModule({
  declarations: [
    ReservationQueryGraphicBarComponent
  ],
  imports: [
    CommonModule,
    ReservationQueryGraphicBarRoutingModule
  ],
  exports: [
    ReservationQueryGraphicBarComponent
  ]
})
export class ReservationQueryGraphicBarModule { }
