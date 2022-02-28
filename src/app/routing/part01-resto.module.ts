import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Part01RestoHomeComponent } from 'src/app/part01-resto-home/part01-resto-home.component';

const routes: Routes = [
  // {
  //   path: 'resto-home',
  //   // canActivate: [AuthGuardService],
  //   loadChildren: () => import('src/app/mod/private/a-resto/a-resto.module')
  //     .then(mod => mod.ARestoModule)
  // },
  { path: 'resto-home', component: Part01RestoHomeComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: []
  })
  export class Part01RestoModule { }