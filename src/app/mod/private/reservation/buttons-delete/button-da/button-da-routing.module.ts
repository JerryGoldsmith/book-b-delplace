import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonDAComponent } from 'src/app/part01-reservation/buttons-delete/button-da/button-da.component';

const routes: Routes = [
  { path: '', component: ButtonDAComponent }
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
export class ButtonDARoutingModule { }
