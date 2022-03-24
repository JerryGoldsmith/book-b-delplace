import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { Part01BackofficeHomeComponent } from 'src/app/part01-backoffice-home/part01-backoffice-home.component';

const routes: Routes = [
  { path: '', component: Part01BackofficeHomeComponent }
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
export class EditionBackofficeRoutingModule { }
