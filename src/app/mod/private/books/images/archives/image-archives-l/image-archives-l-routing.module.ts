import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageLArchiveComponent } from 'src/app/edition/images/image-l-archive/image-l-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageLArchiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImageArchivesLRoutingModule { }
