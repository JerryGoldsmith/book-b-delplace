import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListLComponent } from 'src/app/edition/images/imagelist-l/imagelist-l.component';

const routes: Routes = [
  { path: '', component: ImageListLComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesListLRoutingModule { }
