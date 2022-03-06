import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthPreloadStrategy } from '../preloadind/auth-preload-strategy';

import { AuthGuardService } from './../services/auth-guard.service';


import { LoadGuardGuard } from '../preloadind/load-guard.guard';

const routes: Routes = [

  /* home */
  {
    path: 'resto-home',
    // canLoad: [LoadGuardGuard],
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/a-resto/a-resto.module')
      .then(mod => mod.ARestoModule),
      data: { preload: true, delay:1000 }
  },

  // {
  //   path: 'resto-home',
  //   // loadChildren: 'src/app/mod/private/a-resto/a-resto.module#ARestoModule',
  //   canLoad: [LoadGuardGuard],
  //     loadChildren: () => import('src/app/mod/private/a-resto/a-resto.module')
  //       .then(mod => mod.ARestoModule)
  //     // data: { preload: true, delay: false },
  //     // data: { preload: true, delay:1000 }
  // },

  // { path: 'resto-home', component: Part01RestoHomeComponent },

  /* add (selection menus) */
  {
    path: 'addA',
    canActivate: [AuthGuardService],
    // loadChildren: 'src/app/mod/private/resto/add/a/a.module#AModule',
    loadChildren: () => import('src/app/mod/private/resto/add/a/a.module')
      .then(mod => mod.AModule),
      data: { preload: true, delay:2000 }
  },
  {
    path: 'addB',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/resto/add/b/b.module')
      .then(mod => mod.BModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'addC',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/resto/add/c/c.module')
      .then(mod => mod.CModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'addD',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/resto/add/d/d.module')
      .then(mod => mod.DModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'addE',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/resto/add/e/e.module')
      .then(mod => mod.EModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'addF',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/resto/add/f/f.module')
      .then(mod => mod.FModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'addG',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/resto/add/g/g.module')
      .then(mod => mod.GModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'addH',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/resto/add/h/h.module')
      .then(mod => mod.HModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'addI',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/resto/add/i/i.module')
      .then(mod => mod.IModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'addJ',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/resto/add/j/j.module')
      .then(mod => mod.JModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'addK',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/resto/add/k/k.module')
      .then(mod => mod.KModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'addL',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/resto/add/l/l.module')
      .then(mod => mod.LModule),
      data: { preload: true, delay:1000 }
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes,
        { preloadingStrategy: AuthPreloadStrategy })
    ],
  exports: [
    RouterModule
  ]})
  export class Part01RestoModule { }