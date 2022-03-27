import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageGComponent } from 'src/app/edition/images/image-g/image-g.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageGComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImagesGRoutingModule { }
