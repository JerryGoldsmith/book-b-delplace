import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part01RestoHomeComponent } from 'src/app/part01-resto-home/part01-resto-home.component';

const routes: Routes = [
  { path: '', component: Part01RestoHomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ARestoRoutingModule { }
