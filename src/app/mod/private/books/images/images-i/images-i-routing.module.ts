import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageIComponent } from 'src/app/edition/images/image-i/image-i.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageIComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImagesIRoutingModule { }
