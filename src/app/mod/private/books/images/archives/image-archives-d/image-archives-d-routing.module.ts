import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageDArchiveComponent } from 'src/app/edition/images/image-d-archive/image-d-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageDArchiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImageArchivesDRoutingModule { }
