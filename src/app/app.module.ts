import { AppComponent } from './app.component';

/* -------------------------------------------------- */
/* --------------------- MODULES --------------------- */
/* -------------------------------------------------- */

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'; // Acces Firebase

import { CommonFormReactiveModule } from './routing/common-form-reactive.module'
import { Part01RestoModule } from './routing/part01-resto.module'
import { Part01EditionModule } from './routing/part01-edition.module'
import { Part01EditionImagesModule } from './routing/part01-edition-images.module'
import { Part01ReservationModule } from './routing/part01-reservation.module'
import { RoutingModule } from './routing/routing-module'

// import { am5themes } from "@amcharts/amcharts5";

/* -------------------------------------------------- */
/* --------------------- ROUTES --------------------- */
/* -------------------------------------------------- */

import { Routes, RouterModule } from '@angular/router';
import { AuthPreloadStrategy } from './pre-loading/auth-preload-strategy';
import { LazyLoadImageModule } from 'ng-lazyload-image';

/* -------------------------------------------------- */
/* ------------------ ECRAN D'ENTRÉE ---------------- */
/* -------------------------------------------------- */

import { MainComponent } from './main/main.component';

/* ---- Footer ----- */

import { FooterComponent } from './footer/footer.component';

/* -------------------------------------------- */
/* ------------------ AUTH -------------------- */
/* -------------------------------------------- */

import { SigninComponent } from './auth/signin/signin.component';
import { SigninlistComponent } from './auth/signinlist/signinlist.component';

import { SignupComponent } from './auth/signup/signup.component';
import { SignupLightComponent } from './auth/signuplight/signuplight.component';


/* -------------------------------------------------- */
/* --------------------- SERVICES ------------------- */
/* -------------------------------------------------- */

/* Auth */
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthentificationService } from "./services/authentification.service";

const appRoutes: Routes = [

  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },

  // auth
  { path: 'auth/signinlist', component: SigninlistComponent },

  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signuplight', component: SignupLightComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignupComponent,
    SignupLightComponent,
    SigninComponent,
    SigninlistComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    RoutingModule,
    Part01RestoModule,
    Part01EditionModule,
    Part01EditionImagesModule,
    Part01ReservationModule,
    CommonFormReactiveModule,
    RouterModule.forRoot(appRoutes,
      { preloadingStrategy: AuthPreloadStrategy }),
      LazyLoadImageModule
  ],
  exports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [
    AuthService,
    AuthGuardService,
    AuthentificationService,
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    AuthPreloadStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
