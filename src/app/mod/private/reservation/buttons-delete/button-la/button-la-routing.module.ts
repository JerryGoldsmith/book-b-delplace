import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonLAComponent } from 'src/app/part01-reservation/buttons-delete/button-la/button-la.component';

const routes: Routes = [
  { path: '', component: ButtonLAComponent }
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
export class ButtonLARoutingModule { }
