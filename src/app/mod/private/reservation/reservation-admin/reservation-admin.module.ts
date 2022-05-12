import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationAdminRoutingModule } from './reservation-admin-routing.module';
import { ReservationAdminComponent } from 'src/app/part01-reservation/reservation-admin/reservation-admin.component';

@NgModule({
  declarations: [
    ReservationAdminComponent
  ],
  imports: [
    CommonModule,
    ReservationAdminRoutingModule
  ],
  exports: [
    ReservationAdminComponent
  ]
})
export class ReservationAdminModule { }
