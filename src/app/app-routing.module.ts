import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

/* ---- Main Navigation ----- */

const routes: Routes = [
  { 
    path: '', component: MainComponent
   },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'partA',
    loadChildren: () => import('src/app/mod/public/a/a.module')
    .then(mod => mod.AModule)
  },
  {
    path: 'partB',
    loadChildren: () => import('src/app/mod/public/b/b.module')
    .then(mod => mod.BModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
