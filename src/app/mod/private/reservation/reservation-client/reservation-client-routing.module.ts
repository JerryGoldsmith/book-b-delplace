import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ReservationClientComponent } from 'src/app/part01-reservation/reservation-client/reservation-client.component';

const routes: Routes = [
  { path: '', component: ReservationClientComponent }
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
export class ReservationClientRoutingModule { }
