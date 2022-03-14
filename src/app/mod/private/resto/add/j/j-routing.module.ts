import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JComponent } from 'src/app/restos/add/addJ/addJ.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: JComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class JRoutingModule { }
