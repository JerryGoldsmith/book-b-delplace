import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationClientComponent } from 'src/app/part01-reservation/reservation-client/reservation-client.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ReservationClientComponent }
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
export class ReservationClientRoutingModule { }
