import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListGComponent } from 'src/app/edition/images/imagelist-g/imagelist-g.component';

const routes: Routes = [
  { path: '', component: ImageListGComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesListGRoutingModule { }
