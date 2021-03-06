import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationQueryGraphicPolarareaRoutingModule } from './reservation-query-graphic-polararea-routing.module';
import { ReservationQueryGraphicPolarareaComponent } from 'src/app/part01-reservation/reservation-query-graphic-polararea/reservation-query-graphic-polararea.component';

@NgModule({
  declarations: [
    ReservationQueryGraphicPolarareaComponent
  ],
  imports: [
    CommonModule,
    ReservationQueryGraphicPolarareaRoutingModule
  ],
  exports: [
    ReservationQueryGraphicPolarareaComponent
  ]
})
export class ReservationQueryGraphicPolarareaModule { }
