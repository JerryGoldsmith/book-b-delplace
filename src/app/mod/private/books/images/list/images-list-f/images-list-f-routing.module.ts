import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListFComponent } from 'src/app/edition/images/imagelist-f/imagelist-f.component';

const routes: Routes = [
  { path: '', component: ImageListFComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesListFRoutingModule { }
