import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListBComponent } from 'src/app/edition/images/imagelist-b/imagelist-b.component';

const routes: Routes = [
  { path: '', component: ImageListBComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesListBRoutingModule { }
