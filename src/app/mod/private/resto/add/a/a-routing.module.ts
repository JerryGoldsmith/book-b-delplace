import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AComponent } from 'src/app/restos/add/addA/addA.component';

const routes: Routes = [
  { path: '', component: AComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ARoutingModule { }
