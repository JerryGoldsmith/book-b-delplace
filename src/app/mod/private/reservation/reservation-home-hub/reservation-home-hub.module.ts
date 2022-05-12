import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomeHubRoutingModule } from './reservation-home-hub-routing.module';
import { ReservationHomeHubComponent } from 'src/app/part01-reservation/reservation-home-hub/reservation-home-hub.component';

@NgModule({
  declarations: [
    ReservationHomeHubComponent
  ],
  imports: [
    CommonModule,
    ReservationHomeHubRoutingModule
  ],
  exports: [
    ReservationHomeHubComponent
  ]
})
export class ReservationHomeHubModule { }
