import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationAdminComponent } from 'src/app/part01-reservation/reservation-admin/reservation-admin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ReservationAdminComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationAdminRoutingModule { }
