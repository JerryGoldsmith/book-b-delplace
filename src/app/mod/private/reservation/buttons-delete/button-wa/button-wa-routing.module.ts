import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonWAComponent } from 'src/app/part01-reservation/buttons-delete/button-wa/button-wa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ButtonWAComponent }
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
export class ButtonWARoutingModule { }
