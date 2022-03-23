import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { Part01EditionHomeComponent } from 'src/app/part01-edition-home/part01-edition-home.component';

const routes: Routes = [
  { path: '', component: Part01EditionHomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class EditionRenduRoutingModule { }
