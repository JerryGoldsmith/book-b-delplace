import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageLComponent } from 'src/app/edition/images/image-l/image-l.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageLComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImagesLRoutingModule { }
