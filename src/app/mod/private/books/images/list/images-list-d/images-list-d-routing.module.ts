import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListDComponent } from 'src/app/edition/images/imagelist-d/imagelist-d.component';

const routes: Routes = [
  { path: '', component: ImageListDComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesListDRoutingModule { }
