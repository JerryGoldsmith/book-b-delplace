import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListEComponent } from 'src/app/edition/images/imagelist-e/imagelist-e.component';

const routes: Routes = [
  { path: '', component: ImageListEComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesListERoutingModule { }
