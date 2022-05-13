import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatsStartComponent } from 'src/app/part01-reservation/seats/seats-start/seats-start.component';

import { ValueArrayPipeModule } from 'src/app/routing/value-array-pipe.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SeatsStartComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ValueArrayPipeModule
  ],
  exports: [
    RouterModule
  ]
})
export class SeatsStartRoutingModule { }
