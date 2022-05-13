import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonCAComponent } from 'src/app/part01-reservation/buttons-delete/button-ca/button-ca.component';

const routes: Routes = [
  { path: '', component: ButtonCAComponent }
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
export class ButtonCARoutingModule { }
