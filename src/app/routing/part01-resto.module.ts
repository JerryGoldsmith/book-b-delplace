import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './../services/auth-guard.service';

import { Part01RestoHomeComponent } from 'src/app/part01-resto-home/part01-resto-home.component';
import { LoadGuardGuard } from '../guard/load-guard.guard';

import { AuthPreloadStrategy } from './../guard/auth-preload-strategy';

const routes: Routes = [
  {
    path: 'resto-home',
    // canActivate: [AuthGuardService],
    // canLoad: [LoadGuardGuard],
    loadChildren: () => import('src/app/mod/private/a-resto/a-resto.module')
      .then(mod => mod.ARestoModule)
  }
  // { path: 'resto-home', component: Part01RestoHomeComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes,
      { preloadingStrategy: AuthPreloadStrategy }
      )],
    exports: []
  })
  export class Part01RestoModule { }