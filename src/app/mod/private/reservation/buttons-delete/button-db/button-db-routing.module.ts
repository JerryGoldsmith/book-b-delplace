import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonDBComponent } from 'src/app/part01-reservation/buttons-delete/button-db/button-db.component';

const routes: Routes = [
  { path: '', component: ButtonDBComponent }
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
export class ButtonDBRoutingModule { }
