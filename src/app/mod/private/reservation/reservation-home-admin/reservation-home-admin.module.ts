import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomeAdminRoutingModule } from './reservation-home-admin-routing.module';
import { ReservationHomeAdminComponent } from 'src/app/part01-reservation/reservation-home-admin/reservation-home-admin.component';

import { ReservationAdminComponent } from 'src/app/part01-reservation/reservation-admin/reservation-admin.component';
import { ReservationQueryDateComponent } from 'src/app/part01-reservation/reservation-query-date/reservation-query-date.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReservationHomeAdminComponent,
    ReservationAdminComponent,
    ReservationQueryDateComponent
  ],
  imports: [
    CommonModule,
    ReservationHomeAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ReservationHomeAdminComponent,
    ReservationAdminComponent,
    ReservationQueryDateComponent
  ]
})
export class ReservationHomeAdminModule { }
