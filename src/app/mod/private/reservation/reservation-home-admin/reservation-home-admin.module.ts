import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomeAdminRoutingModule } from './reservation-home-admin-routing.module';
import { ReservationHomeAdminComponent } from 'src/app/part01-reservation/reservation-home-admin/reservation-home-admin.component';

@NgModule({
  declarations: [
    ReservationHomeAdminComponent
  ],
  imports: [
    CommonModule,
    ReservationHomeAdminRoutingModule
  ],
  exports: [
    ReservationHomeAdminComponent
  ]
})
export class ReservationHomeAdminModule { }
