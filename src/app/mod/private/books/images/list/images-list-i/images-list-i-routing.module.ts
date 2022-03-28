import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListIComponent } from 'src/app/edition/images/imagelist-i/imagelist-i.component';

const routes: Routes = [
  { path: '', component: ImageListIComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesListIRoutingModule { }
