import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

import { SeatsStartComponent } from 'src/app/part01-reservation/seats/seats-start/seats-start.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SeatsStartComponent }
];

@NgModule({
  declarations: [
    ValueArrayPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class SeatsStartRoutingModule { }
