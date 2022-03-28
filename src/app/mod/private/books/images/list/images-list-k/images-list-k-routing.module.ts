import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListKComponent } from 'src/app/edition/images/imagelist-k/imagelist-k.component';

const routes: Routes = [
  { path: '', component: ImageListKComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesListKRoutingModule { }
