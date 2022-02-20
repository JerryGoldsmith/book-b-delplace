import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

/* ---- Main Navigation ----- */

import { Part01Component } from './part01/part01.component';

const routes: Routes = [
  { 
    path: '', component: MainComponent
   },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'part01', component: Part01Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
