import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListComponent } from 'src/app/edition/images/imagelist/imagelist.component';

const routes: Routes = [
  { path: '', component: ImageListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesListARoutingModule { }
