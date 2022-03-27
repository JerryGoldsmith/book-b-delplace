import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageGArchiveComponent } from 'src/app/edition/images/image-g-archive/image-g-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageGArchiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImageArchivesGRoutingModule { }
