import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// lazy load images
import { LazyImgDirective } from 'src/app/helpers/lazy-img.directive';
import { AuthPreloadStrategy } from '../pre-loading/auth-preload-strategy';
import { LazyLoadImageModule } from 'ng-lazyload-image';

/* AngularFire */
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { CommonModule } from "@angular/common";

import { SharedModule } from "./../shared/shared.module";

import { MainComponent } from './../main/main.component';

/* -------------------------------------------- */
/* ------------------ AUTH -------------------- */
/* -------------------------------------------- */

import { SignupComponent } from './../auth/signup/signup.component';
import { SignupLightComponent } from './../auth/signuplight/signuplight.component';
import { SigninlistComponent } from './../auth/signinlist/signinlist.component';


import { environment } from '../../environments/environment';

import { AngularResizeEventModule } from 'angular-resize-event';

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
    .then(mod => mod.AModule),
    data: { preload: true, delay:1000 }
  },
  {
    path: 'partB',
    loadChildren: () => import('src/app/mod/public/b/b.module')
    .then(mod => mod.BModule),
    data: { preload: true, delay:1000 }
  },
  {
    path: 'partC',
    loadChildren: () => import('src/app/mod/public/c/c.module')
    .then(mod => mod.CModule),
    data: { preload: true, delay:1000 }
  },
  {
    path: 'partD',
    loadChildren: () => import('src/app/mod/public/d/d.module')
    .then(mod => mod.DModule),
    data: { preload: true, delay:1000 }
  },
  { // auth
    path: 'auth/signin',
    loadChildren: () => import('src/app/mod/public/auth/signin/signin.module')
      .then(mod => mod.SigninModule),
      data: { preload: true, delay:1000 } // component déclaré dans appModule / pas dans mod/public/auth/signin.module
  },
  // {
  //   path: 'auth/signinlist',
  //   loadChildren: () => import('src/app/mod/public/auth/signinlist/signinlist.module')
  //     .then(mod => mod.SigninlistModule)
  // },
  // {
  //   path: 'auth/signup',
  //   loadChildren: () => import('src/app/mod/private/auth/signup/signup.module')
  //     .then(mod => mod.SignupModule)
  // },
  // {
  //   path: 'auth/signuplight',
  //   loadChildren: () => import('src/app/mod/private/auth/signuplight/signuplight.module')
  //     .then(mod => mod.SignuplightModule)
  // },

  { path: 'auth/signinlist', component: SigninlistComponent },

  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signuplight', component: SignupLightComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    { preloadingStrategy: AuthPreloadStrategy }),
    LazyLoadImageModule,
 
    SharedModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,

    AngularResizeEventModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    SharedModule,
    AngularResizeEventModule
  ],
  providers: [
    LazyImgDirective,
    AuthPreloadStrategy
  ]
})
export class RoutingModule {
 }
