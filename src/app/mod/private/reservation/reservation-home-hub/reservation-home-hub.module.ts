import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomeHubRoutingModule } from './reservation-home-hub-routing.module';
import { ReservationHomeHubComponent } from 'src/app/part01-reservation/reservation-home-hub/reservation-home-hub.component';

import { ReservationPictureTerComponent } from 'src/app/part01-reservation/reservation-picture-ter/reservation-picture-ter.component';

@NgModule({
  declarations: [
    ReservationHomeHubComponent,
    ReservationPictureTerComponent
  ],
  imports: [
    CommonModule,
    ReservationHomeHubRoutingModule
  ],
  exports: [
    ReservationHomeHubComponent,
    ReservationPictureTerComponent
  ]
})
export class ReservationHomeHubModule { }
