import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListCComponent } from 'src/app/edition/images/imagelist-c/imagelist-c.component';

const routes: Routes = [
  { path: '', component: ImageListCComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesListCRoutingModule { }
