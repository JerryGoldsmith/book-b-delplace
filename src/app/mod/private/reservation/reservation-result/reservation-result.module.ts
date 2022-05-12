import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationResultRoutingModule } from './reservation-result-routing.module';
import { ReservationResultComponent } from 'src/app/part01-reservation/reservation-result/reservation-result.component';

@NgModule({
  declarations: [
    ReservationResultComponent
  ],
  imports: [
    CommonModule,
    ReservationResultRoutingModule
  ],
  exports: [
    ReservationResultComponent
  ]
})
export class ReservationResultModule { }
