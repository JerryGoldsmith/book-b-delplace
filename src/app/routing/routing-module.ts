import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthPreloadStrategy } from '../pre-loading/auth-preload-strategy';

// import { CommonModule, registerLocaleData } from "@angular/common";
import * as fr from "@angular/common/locales/fr";

/* AngularFire */

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { CommonModule } from "@angular/common";

// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// SharedModule needs CommonModule (app.module)
import { SharedModule } from "./../shared/shared.module";

import { MainComponent } from './../main/main.component';

// import { Part01Component } from './../part01/part01.component';

/* -------------------------------------------- */
/* ------------------ AUTH -------------------- */
/* -------------------------------------------- */

import { SignupComponent } from './../auth/signup/signup.component';
import { SignupLightComponent } from './../auth/signuplight/signuplight.component';
// import { SigninComponent } from './../auth/signin/signin.component';
import { SigninlistComponent } from './../auth/signinlist/signinlist.component';

/* ---- Footer ----- */

// import { FooterComponent } from './../footer/footer.component';

/* -------------------------------------------------- */
/* --------------------- SERVICES ------------------- */
/* -------------------------------------------------- */

/* Auth */
import { AuthService } from './../services/auth.service';
import { AuthGuardService } from './../services/auth-guard.service';
import { AuthentificationService } from "./../services/authentification.service";

    /* Acces Firebase */
    import { environment } from '../../environments/environment';
    // import { HttpClientModule } from '@angular/common/http'; // Acces Firebase

    /* FormsModule */

    // import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    /* AngularResizedEvent */

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
  // { path: 'partA', component: Part01Component },
  {
    path: 'partA',
    loadChildren: () => import('src/app/mod/public/a/a.module')
    .then(mod => mod.AModule),
    data: { preload: true, delay:1000 }
  },
  {
    path: 'partB',
    loadChildren: () => import('src/app/mod/public/b/b.module')
    .then(mod => mod.BModule)
  },
  {
    path: 'partC',
    loadChildren: () => import('src/app/mod/public/c/c.module')
    .then(mod => mod.CModule)
  },
  {
    path: 'partD',
    loadChildren: () => import('src/app/mod/public/d/d.module')
    .then(mod => mod.DModule)
  },

  // -----
  // auth :
  // -----

  {
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

  // { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signinlist', component: SigninlistComponent },

  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signuplight', component: SignupLightComponent }
];

@NgModule({
  declarations: [
    // FooterComponent
    // Part01Component
  ],
  imports: [
    RouterModule.forRoot(routes,
      { preloadingStrategy: AuthPreloadStrategy }),
    // BrowserModule,
    // BrowserAnimationsModule,
    SharedModule,
    // CommonModule,

    // HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,

    // FormsModule,
    // ReactiveFormsModule,
    AngularResizeEventModule,
    CommonModule // display auth in partA
  ],
  exports: [
    RouterModule,
    SharedModule,
    AngularResizeEventModule
  ],
  providers: [
    // AuthService,
    // AuthGuardService,
    // AuthentificationService
  ]
})
export class RoutingModule {
  // constructor() {
  //   registerLocaleData(fr.default);
  // }
 }
