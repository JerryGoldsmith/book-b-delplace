import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationQueryGraphicsRoutingModule } from './reservation-query-graphics-routing.module';
import { ReservationQueryGraphicsComponent } from 'src/app/part01-reservation/reservation-query-graphics/reservation-query-graphics.component';

@NgModule({
  declarations: [
    ReservationQueryGraphicsComponent
  ],
  imports: [
    CommonModule,
    ReservationQueryGraphicsRoutingModule
  ],
  exports: [
    ReservationQueryGraphicsComponent
  ]
})
export class ReservationQueryGraphicsModule { }
