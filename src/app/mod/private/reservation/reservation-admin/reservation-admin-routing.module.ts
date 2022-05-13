import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationAdminComponent } from 'src/app/part01-reservation/reservation-admin/reservation-admin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KeyValuePipeModule } from 'src/app/routing/key-value-pipe.module';
import { ValueArrayPipeModule } from 'src/app/routing/value-array-pipe.module';

const routes: Routes = [
  { path: '', component: ReservationAdminComponent }
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
export class ReservationAdminRoutingModule { }
