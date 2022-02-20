import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DComponent } from 'src/app/restos/add/addD/addD.component';

const routes: Routes = [
  { path: '', component: DComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DRoutingModule { }
