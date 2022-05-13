import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonZAComponent } from 'src/app/part01-reservation/buttons-delete/button-za/button-za.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ButtonZAComponent }
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
export class ButtonZARoutingModule { }
