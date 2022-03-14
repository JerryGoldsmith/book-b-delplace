import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { RestosComponent } from 'src/app/restos/restos.component';

const routes: Routes = [
  { path: '', component: RestosComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class RestoRoutingModule { }
