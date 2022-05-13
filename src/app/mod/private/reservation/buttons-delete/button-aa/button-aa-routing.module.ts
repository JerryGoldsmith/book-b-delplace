import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonAAComponent } from 'src/app/part01-reservation/buttons-delete/button-aa/button-aa.component';

const routes: Routes = [
  { path: '', component: ButtonAAComponent }
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
export class ButtonAARoutingModule { }
