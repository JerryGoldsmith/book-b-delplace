import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationHomeHubComponent } from 'src/app/part01-reservation/reservation-home-hub/reservation-home-hub.component';

const routes: Routes = [
  { path: '', component: ReservationHomeHubComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationHomeHubRoutingModule { }
