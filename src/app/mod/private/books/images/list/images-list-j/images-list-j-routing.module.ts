import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListJComponent } from 'src/app/edition/images/imagelist-j/imagelist-j.component';

const routes: Routes = [
  { path: '', component: ImageListJComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesListJRoutingModule { }
