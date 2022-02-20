import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IComponent } from 'src/app/restos/add/addI/addI.component';

const routes: Routes = [
  { path: '', component: IComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IRoutingModule { }
