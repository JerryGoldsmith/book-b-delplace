import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationClientComponent } from 'src/app/part01-reservation/reservation-client/reservation-client.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KeyValuePipeModule } from 'src/app/routing/key-value-pipe.module';
import { ValueArrayPipeModule } from 'src/app/routing/value-array-pipe.module';

const routes: Routes = [
  { path: '', component: ReservationClientComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    KeyValuePipeModule,
    ValueArrayPipeModule
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationClientRoutingModule { }
