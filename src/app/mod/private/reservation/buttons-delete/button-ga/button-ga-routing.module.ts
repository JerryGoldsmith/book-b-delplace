import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonGAComponent } from 'src/app/part01-reservation/buttons-delete/button-ga/button-ga.component';

const routes: Routes = [
  { path: '', component: ButtonGAComponent }
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
export class ButtonGARoutingModule { }
