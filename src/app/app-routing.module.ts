import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

/* AngularFire */

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

/* Acces Firebase */
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http'; // Acces Firebase

/* -------------------------------------------- */
/* ------------------ AUTH -------------------- */
/* -------------------------------------------- */

import { SignupComponent } from './auth/signup/signup.component';
import { SignupLightComponent } from './auth/signuplight/signuplight.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SigninlistComponent } from './auth/signinlist/signinlist.component';

/* ----------------------------------------------- */
/* ------------------ Part 01 -------------------- */
/* ----------------------------------------------- */

// import { Part01ReservationHomeComponent } from './part01-reservation-home/part01-reservation-home.component';
// import { Part01RestoHomeComponent } from './part01-resto-home/part01-resto-home.component';
// import { Part01EditionHomeComponent } from './part01-edition-home/part01-edition-home.component';

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
  // auth
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signinlist', component: SigninlistComponent },

  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signuplight', component: SignupLightComponent },

  // { path: 'reservation', canActivate: [AuthGuardService], component: Part01ReservationHomeComponent },
  // { path: 'resto', canActivate: [AuthGuardService], component: Part01RestoHomeComponent },
  // { path: 'edition', canActivate: [AuthGuardService], component: Part01EditionHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
