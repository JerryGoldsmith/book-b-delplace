import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ReservationHomeAdminComponent } from 'src/app/part01-reservation/reservation-home-admin/reservation-home-admin.component';

const routes: Routes = [
  { path: '', component: ReservationHomeAdminComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationHomeAdminRoutingModule { }
