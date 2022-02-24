import { AppComponent } from './app.component';

/* -------------------------------------------------- */
/* --------------------- MODULES --------------------- */
/* -------------------------------------------------- */

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// everywhere in the app
import { SharedModule } from "./shared/shared.module";
// SharedModule needs CommonModule
import { CommonModule, registerLocaleData } from "@angular/common";
// pipe for date
import * as fr from "@angular/common/locales/fr";

/* -------------------------------------------------- */
/* --------------------- ROUTES --------------------- */
/* -------------------------------------------------- */

import { Routes, RouterModule } from '@angular/router';

/* -------------------------------------------------- */
/* ------------------ ECRAN D'ENTRÉE ---------------- */
/* -------------------------------------------------- */

import { MainComponent } from './main/main.component';

/* -------------------------------------------------- */
/* ----------------------- PartA -------------------- */
/* -------------------------------------------------- */

// import { Part01SingleComponent } from './part01-single/part01-single.component';

/* -------------------------------------------- */
/* ------------------ AUTH -------------------- */
/* -------------------------------------------- */

import { SigninComponent } from './auth/signin/signin.component';
import { SigninlistComponent } from './auth/signinlist/signinlist.component';

import { SignupComponent } from './auth/signup/signup.component';
import { SignupLightComponent } from './auth/signuplight/signuplight.component';

const appRoutes: Routes = [

  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },

  // auth
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signinlist', component: SigninlistComponent },

  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signuplight', component: SignupLightComponent },

  // { path: 'part01/:id', component: Part01SingleComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignupComponent,
    SignupLightComponent,
    SigninComponent,
    SigninlistComponent
    // Part01SingleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
