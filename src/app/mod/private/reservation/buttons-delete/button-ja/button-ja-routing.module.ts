import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonJAComponent } from 'src/app/part01-reservation/buttons-delete/button-ja/button-ja.component';

const routes: Routes = [
  { path: '', component: ButtonJAComponent }
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
export class ButtonJARoutingModule { }
