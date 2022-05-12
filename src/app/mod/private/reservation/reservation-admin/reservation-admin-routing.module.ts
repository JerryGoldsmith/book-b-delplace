import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ReactiveFormsModule } from '@angular/forms';
import { SeatsComponent } from 'src/app/part01-reservation/seats/seats/seats.component';

import { ReservationAdminComponent } from 'src/app/part01-reservation/reservation-admin/reservation-admin.component';

const routes: Routes = [
  { path: '', component: ReservationAdminComponent }
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
export class ReservationAdminRoutingModule { }
