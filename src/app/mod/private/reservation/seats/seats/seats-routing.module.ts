import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SeatsComponent } from 'src/app/part01-reservation/seats/seats/seats.component';

const routes: Routes = [
  { path: '', component: SeatsComponent }
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
export class SeatsRoutingModule { }
