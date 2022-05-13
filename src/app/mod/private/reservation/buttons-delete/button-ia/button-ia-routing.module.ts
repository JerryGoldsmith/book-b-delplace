import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonIAComponent } from 'src/app/part01-reservation/buttons-delete/button-ia/button-ia.component';

const routes: Routes = [
  { path: '', component: ButtonIAComponent }
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
export class ButtonIARoutingModule { }
