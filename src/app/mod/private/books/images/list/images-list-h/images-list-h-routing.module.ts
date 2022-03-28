import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListHComponent } from 'src/app/edition/images/imagelist-h/imagelist-h.component';

const routes: Routes = [
  { path: '', component: ImageListHComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesListHRoutingModule { }
