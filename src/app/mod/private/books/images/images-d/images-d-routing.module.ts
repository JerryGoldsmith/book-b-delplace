import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageDComponent } from 'src/app/edition/images/image-d/image-d.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageDComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImagesDRoutingModule { }
