import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ReactiveFormsModule } from '@angular/forms';

import { ButtonWAComponent } from 'src/app/part01-reservation/buttons-delete/button-wa/button-wa.component';

const routes: Routes = [
  { path: '', component: ButtonWAComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ButtonWARoutingModule { }
