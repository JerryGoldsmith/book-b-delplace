import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ReactiveFormsModule } from '@angular/forms';

import { ButtonYAComponent } from 'src/app/part01-reservation/buttons-delete/button-ya/button-ya.component';

const routes: Routes = [
  { path: '', component: ButtonYAComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ButtonYARoutingModule { }
