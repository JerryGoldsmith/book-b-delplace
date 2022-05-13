import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

import { SeatsComponent } from 'src/app/part01-reservation/seats/seats/seats.component';

const routes: Routes = [
  { path: '', component: SeatsComponent }
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
export class SeatsRoutingModule { }
