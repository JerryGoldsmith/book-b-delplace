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

import { AuthGuardService } from './services/auth-guard.service';

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
  // ----

  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signinlist', component: SigninlistComponent },

  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signuplight', component: SignupLightComponent },

  // partA home
  // ----------

  // { path: 'reservation', canActivate: [AuthGuardService], component: Part01ReservationHomeComponent },
  // { path: 'resto', canActivate: [AuthGuardService], component: Part01RestoHomeComponent },
  // { path: 'edition', canActivate: [AuthGuardService], component: Part01EditionHomeComponent },

  // reservation (order)
  // -------------------

  // { path: 'lazyReservationHome', component: OrderReservationHomeComponent },
  // { path: 'lazyReservation', component: OrderReservationComponent },
  // { path: 'lazyReservationList', component: OrderReservationListComponent },

  // show :
  // { path: 'show', component: OrderReservationResultComponent },

  // result - confirmation :
  // { path: 'result', component: OrderReservationShowResultComponent },
  // { path: 'confirmation', component: OrderReservationResultComponent },

  // resto (restos)
  // --------------

  // pages produits :
  // { path: 'addA', canActivate: [AuthGuardService], component: AComponent },
  // { path: 'addB', canActivate: [AuthGuardService], component: BComponent },
  // { path: 'addC', canActivate: [AuthGuardService], component: CComponent },
  // { path: 'addD', canActivate: [AuthGuardService], component: DComponent },
  // { path: 'addE', canActivate: [AuthGuardService], component: EComponent },
  // { path: 'addF', canActivate: [AuthGuardService], component: FComponent },
  // { path: 'addG', canActivate: [AuthGuardService], component: GComponent },
  // { path: 'addH', component: HComponent },
  // { path: 'addI', canActivate: [AuthGuardService], component: IComponent },
  // { path: 'addJ', canActivate: [AuthGuardService], component: JComponent },
  // { path: 'addK', canActivate: [AuthGuardService], component: KComponent },
  // { path: 'addL', canActivate: [AuthGuardService], component: LComponent },

  // result :
  // { path: 'abcdefghijkl', canActivate: [AuthGuardService], component: AbcdefghijklComponent },

  // payment :
  // { path: 'payment', canActivate: [AuthGuardService], component: PaymentComponent },

  // -------------------
  // edition (book-list)
  // -------------------

  // ------------ mise en page par blocs :

  // { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },

  // mise en page par blocs / blocs :
  // { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
  // { path: 'bookAs/new', canActivate: [AuthGuardService], component: BookFormAComponent },
  // { path: 'bookBs/new', canActivate: [AuthGuardService], component: BookFormBComponent },
  // { path: 'bookCs/new', canActivate: [AuthGuardService], component: BookFormCComponent },
  // { path: 'bookDs/new', canActivate: [AuthGuardService], component: BookFormDComponent },
  // { path: 'bookEs/new', canActivate: [AuthGuardService], component: BookFormEComponent },
  // { path: 'bookFs/new', canActivate: [AuthGuardService], component: BookFormFComponent },

  // { path: 'bookGs/new', canActivate: [AuthGuardService], component: BookFormGComponent },

  // { path: 'bookHs/new', canActivate: [AuthGuardService], component: BookFormHComponent },
  // { path: 'bookIs/new', canActivate: [AuthGuardService], component: BookFormIComponent },
  // { path: 'bookJs/new', canActivate: [AuthGuardService], component: BookFormJComponent },
  // { path: 'bookKs/new', canActivate: [AuthGuardService], component: BookFormKComponent },
  // { path: 'bookLs/new', canActivate: [AuthGuardService], component: BookFormLComponent },

  // mise en page par blocs / single pages :
  // { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
  // { path: 'bookAs/view/:id', canActivate: [AuthGuardService], component: SingleBookAComponent },
  // { path: 'bookBs/view/:id', canActivate: [AuthGuardService], component: SingleBookBComponent },
  // { path: 'bookCs/view/:id', canActivate: [AuthGuardService], component: SingleBookCComponent },
  // { path: 'bookDs/view/:id', canActivate: [AuthGuardService], component: SingleBookDComponent },
  // { path: 'bookEs/view/:id', canActivate: [AuthGuardService], component: SingleBookEComponent },
  // { path: 'bookFs/view/:id', canActivate: [AuthGuardService], component: SingleBookFComponent },
  // { path: 'bookGs/view/:id', canActivate: [AuthGuardService], component: SingleBookGComponent },
  // { path: 'bookHs/view/:id', canActivate: [AuthGuardService], component: SingleBookHComponent },
  // { path: 'bookIs/view/:id', canActivate: [AuthGuardService], component: SingleBookIComponent },
  // { path: 'bookJs/view/:id', canActivate: [AuthGuardService], component: SingleBookJComponent },
  // { path: 'bookKs/view/:id', canActivate: [AuthGuardService], component: SingleBookKComponent },
  // { path: 'bookLs/view/:id', canActivate: [AuthGuardService], component: SingleBookLComponent },

  // { path: 'bookAlls/view/:id', canActivate: [AuthGuardService], component: SingleBookAllComponent },

  // { path: 'bookAllOnes/view/:id', canActivate: [AuthGuardService], component: SingleBookAllOneComponent },
  // { path: 'bookAllTwos/view/:id', canActivate: [AuthGuardService], component: SingleBookAllTwoComponent },
  // { path: 'bookAllThrees/view/:id', canActivate: [AuthGuardService], component: SingleBookAllThreeComponent },
  // { path: 'bookAllFours/view/:id', canActivate: [AuthGuardService], component: SingleBookAllFourComponent },
  // { path: 'bookAllFives/view/:id', canActivate: [AuthGuardService], component: SingleBookAllFiveComponent },
  // { path: 'bookAllSixs/view/:id', canActivate: [AuthGuardService], component: SingleBookAllSixComponent },

  // mise en page par blocs / version back-office :
  // { path: 'backoffice', canActivate: [AuthGuardService], component: BackofficeComponent },

  // mise en page par blocs / archives :
  // { path: 'archives', canActivate: [AuthGuardService], component: ArchivesComponent },

  // --------- visuels :

  // { path: 'image', canActivate: [AuthGuardService], component: ImagesComponent },

  // visuels / upload :
  // { path: 'upload', canActivate: [AuthGuardService], component: ImageComponent },

  // visuels / upload archives :
  // { path: 'uploadArchive', canActivate: [AuthGuardService], component: ImageArchiveComponent },

  // visuels / upload blocs :
  // // { path: 'uploadA', component: ImageAComponent },
  // { path: 'uploadB', canActivate: [AuthGuardService], component: ImageBComponent },
  // { path: 'uploadArchiveB', canActivate: [AuthGuardService], component: ImageBArchiveComponent },
  // { path: 'uploadC', canActivate: [AuthGuardService], component: ImageCComponent },
  // { path: 'uploadArchiveC', canActivate: [AuthGuardService], component: ImageCArchiveComponent },
  // { path: 'uploadD', canActivate: [AuthGuardService], component: ImageDComponent },
  // { path: 'uploadArchiveD', canActivate: [AuthGuardService], component: ImageDArchiveComponent },
  // { path: 'uploadE', canActivate: [AuthGuardService], component: ImageEComponent },
  // { path: 'uploadArchiveE', canActivate: [AuthGuardService], component: ImageEArchiveComponent },
  // { path: 'uploadF', canActivate: [AuthGuardService], component: ImageFComponent },
  // { path: 'uploadArchiveF', canActivate: [AuthGuardService], component: ImageFArchiveComponent },
  // { path: 'uploadG', canActivate: [AuthGuardService], component: ImageGComponent },
  // { path: 'uploadArchiveG', canActivate: [AuthGuardService], component: ImageGArchiveComponent },
  // { path: 'uploadH', canActivate: [AuthGuardService], component: ImageHComponent },
  // { path: 'uploadArchiveH', canActivate: [AuthGuardService], component: ImageHArchiveComponent },
  // { path: 'uploadI', canActivate: [AuthGuardService], component: ImageIComponent },
  // { path: 'uploadArchiveI', canActivate: [AuthGuardService], component: ImageIArchiveComponent },
  // { path: 'uploadJ', canActivate: [AuthGuardService], component: ImageJComponent },
  // { path: 'uploadArchiveJ', canActivate: [AuthGuardService], component: ImageJArchiveComponent },
  // { path: 'uploadK', canActivate: [AuthGuardService], component: ImageKComponent },
  // { path: 'uploadArchiveK', canActivate: [AuthGuardService], component: ImageKArchiveComponent },
  // { path: 'uploadL', canActivate: [AuthGuardService], component: ImageLComponent },
  // { path: 'uploadArchiveL', canActivate: [AuthGuardService], component: ImageLArchiveComponent },

  // visuels / image list :
  // { path: 'list', canActivate: [AuthGuardService], component: ImageListComponent },
  // { path: 'listA', canActivate: [AuthGuardService], component: ImageListAComponent },
  // { path: 'listB', canActivate: [AuthGuardService], component: ImageListBComponent },
  // { path: 'listC', canActivate: [AuthGuardService], component: ImageListCComponent },
  // { path: 'listD', canActivate: [AuthGuardService], component: ImageListDComponent },
  // { path: 'listE', canActivate: [AuthGuardService], component: ImageListEComponent },
  // { path: 'listF', canActivate: [AuthGuardService], component: ImageListFComponent },
  // { path: 'listG', canActivate: [AuthGuardService], component: ImageListGComponent },
  // { path: 'listH', canActivate: [AuthGuardService], component: ImageListHComponent },
  // { path: 'listI', canActivate: [AuthGuardService], component: ImageListIComponent },
  // { path: 'listJ', canActivate: [AuthGuardService], component: ImageListJComponent },
  // { path: 'listK', canActivate: [AuthGuardService], component: ImageListKComponent },
  // { path: 'listL', canActivate: [AuthGuardService], component: ImageListLComponent },
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
  providers: [
    AuthGuardService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
