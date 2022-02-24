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

// --------------------------------------------------------
// ---------------------- partA home ---------------------- :
// --------------------------------------------------------

// import { Part01ReservationHomeComponent } from './part01-reservation-home/part01-reservation-home.component';
import { Part01RestoHomeComponent } from './part01-resto-home/part01-resto-home.component';
// import { Part01EditionHomeComponent } from './part01-edition-home/part01-edition-home.component';

// --------------------------------------------------
// ------------- partA / resto (restos) ------------- :
// --------------------------------------------------

// pages produits :
// --------------
import { AComponent } from './restos/add/addA/addA.component';
import { BComponent } from './restos/add/addB/addB.component';
import { CComponent } from './restos/add/addC/addC.component';
import { DComponent } from './restos/add/addD/addD.component';
import { EComponent } from './restos/add/addE/addE.component';
import { FComponent } from './restos/add/addF/addF.component';
import { GComponent } from './restos/add/addG/addG.component';
import { HComponent } from './restos/add/addH/addH.component';
import { IComponent } from './restos/add/addI/addI.component';
import { JComponent } from './restos/add/addJ/addJ.component';
import { KComponent } from './restos/add/addK/addK.component';
import { LComponent } from './restos/add/addL/addL.component';

// total :
// ------
import { AbcdefghijklComponent } from './restos/total/abcdefghijkl/abcdefghijkl.component';


// payment :
// -------
import { PaymentComponent } from './restos/total/payment/payment.component';


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

    /* AngularResizedEvent */

    import { AngularResizeEventModule } from 'angular-resize-event';

// reservation

// import { OrderReservationService } from "./services/order-reservation.service";

// resto

import { MatrixService } from "./services/resto/matrix.service";
import { AService } from "./services/resto/a.service";
import { BService } from "./services/resto/b.service";
import { CService } from "./services/resto/c.service";
import { DService } from "./services/resto/d.service";
import { EService } from "./services/resto/e.service";
import { FService } from "./services/resto/f.service";
import { GService } from "./services/resto/g.service";
import { HService } from "./services/resto/h.service";
import { IService } from "./services/resto/i.service";
import { JService } from "./services/resto/j.service";
import { KService } from "./services/resto/k.service";
import { LService } from "./services/resto/l.service";

// images

import { ImageService } from "./services/image.service";

const appRoutes: Routes = [

  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },

  // auth
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signinlist', component: SigninlistComponent },

  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signuplight', component: SignupLightComponent },

  // --------------------------------------------------------
  // ---------------------- partA home ---------------------- :
  // --------------------------------------------------------

  // { path: 'reservation', canActivate: [AuthGuardService], component: Part01ReservationHomeComponent },
  { path: 'resto', canActivate: [AuthGuardService], component: Part01RestoHomeComponent },
  // { path: 'edition', canActivate: [AuthGuardService], component: Part01EditionHomeComponent },

  // --------------------------------------------------
  // ------------- partA / resto (restos) ------------- :
  // --------------------------------------------------

  // pages produits :
  // --------------
  { path: 'addA', canActivate: [AuthGuardService], component: AComponent },
  { path: 'addB', canActivate: [AuthGuardService], component: BComponent },
  { path: 'addC', canActivate: [AuthGuardService], component: CComponent },
  { path: 'addD', canActivate: [AuthGuardService], component: DComponent },
  { path: 'addE', canActivate: [AuthGuardService], component: EComponent },
  { path: 'addF', canActivate: [AuthGuardService], component: FComponent },
  { path: 'addG', canActivate: [AuthGuardService], component: GComponent },
  { path: 'addH', component: HComponent },
  { path: 'addI', canActivate: [AuthGuardService], component: IComponent },
  { path: 'addJ', canActivate: [AuthGuardService], component: JComponent },
  { path: 'addK', canActivate: [AuthGuardService], component: KComponent },
  { path: 'addL', canActivate: [AuthGuardService], component: LComponent },

  // total :
  // ------
  { path: 'abcdefghijkl', canActivate: [AuthGuardService], component: AbcdefghijklComponent },

  // payment :
  // -------
  { path: 'payment', canActivate: [AuthGuardService], component: PaymentComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignupComponent,
    SignupLightComponent,
    SigninComponent,
    SigninlistComponent,
    Part01RestoHomeComponent,
    CComponent,
    BComponent,
    AComponent,
    DComponent,
    EComponent,
    FComponent,
    JComponent,
    LComponent,
    KComponent,
    GComponent,
    HComponent,
    IComponent,
    PaymentComponent,
    AbcdefghijklComponent
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
    AngularResizeEventModule,

    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AuthentificationService,
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    // reservation
    // OrderReservationService,
    // backoffice
    MatrixService,
    AService,
    BService,
    CService,
    DService,
    EService,
    FService,
    GService,
    HService,
    IService,
    JService,
    KService,
    LService,

    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
