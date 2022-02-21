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
/* --------------------- SERVICES ------------------- */
/* -------------------------------------------------- */

/* Auth */
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthentificationService } from "./services/authentification.service";

    /* Acces Firebase */
    import { environment } from '../environments/environment';
    import { HttpClientModule } from '@angular/common/http'; // Acces Firebase

    // import { initializeApp } from "firebase/app";
    // import { getAnalytics } from "firebase/analytics";

    /* AngularFire */

    import { AngularFireModule } from "@angular/fire";
    import { AngularFireAuthModule } from "@angular/fire/auth";
    import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
    import { AngularFirestoreModule } from "@angular/fire/firestore";
    import { AngularFireStorageModule } from '@angular/fire/storage';
    import { AngularFireDatabaseModule } from '@angular/fire/database';

    /* FormsModule */

    import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [

  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' }
  
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    HttpClientModule,
    // initializeApp,
    // getAnalytics,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AuthentificationService,
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
