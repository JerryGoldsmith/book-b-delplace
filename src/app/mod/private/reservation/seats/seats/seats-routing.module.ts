import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ValueArrayPipeModule } from 'src/app/routing/value-array-pipe.module';

import { SeatsComponent } from 'src/app/part01-reservation/seats/seats/seats.component';

const routes: Routes = [
  { path: '', component: SeatsComponent }
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
export class SeatsRoutingModule { }
