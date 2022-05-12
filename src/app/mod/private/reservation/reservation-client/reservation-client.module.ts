import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationClientRoutingModule } from './reservation-client-routing.module';
import { ReservationClientComponent } from 'src/app/part01-reservation/reservation-client/reservation-client.component';

@NgModule({
  declarations: [
    ReservationClientComponent
  ],
  imports: [
    CommonModule,
    ReservationClientRoutingModule
  ],
  exports: [
    ReservationClientComponent
  ]
})
export class ReservationClientModule { }
