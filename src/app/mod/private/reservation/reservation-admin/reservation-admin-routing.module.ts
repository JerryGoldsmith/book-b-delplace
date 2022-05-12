import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ReservationAdminComponent } from 'src/app/part01-reservation/reservation-admin/reservation-admin.component';

const routes: Routes = [
  { path: '', component: ReservationAdminComponent }
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
export class ReservationAdminRoutingModule { }
