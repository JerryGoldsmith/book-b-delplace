import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ReactiveFormsModule } from '@angular/forms';
import { SeatsComponent } from 'src/app/part01-reservation/seats/seats/seats.component';

import { ReservationClientComponent } from 'src/app/part01-reservation/reservation-client/reservation-client.component';

const routes: Routes = [
  { path: '', component: ReservationClientComponent }
];

@NgModule({
  declarations: [
    SeatsComponent
  ],
  imports: [
    RouterModule.forChild(routes)
    // ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationClientRoutingModule { }
