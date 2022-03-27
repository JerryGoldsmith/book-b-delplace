import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageEComponent } from 'src/app/edition/images/image-e/image-e.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageEComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImagesERoutingModule { }
