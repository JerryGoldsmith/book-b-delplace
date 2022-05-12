import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { SeatsStartComponent } from 'src/app/part01-reservation/seats/seats-start/seats-start.component';

const routes: Routes = [
  { path: '', component: SeatsStartComponent }
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
export class SeatsStartRoutingModule { }
