import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageEArchiveComponent } from 'src/app/edition/images/image-e-archive/image-e-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageEArchiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImageArchivesERoutingModule { }
