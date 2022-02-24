import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

/* -------------------------------------------- */
/* ------------------ AUTH -------------------- */
/* -------------------------------------------- */

import { SignupComponent } from './auth/signup/signup.component';
import { SignupLightComponent } from './auth/signuplight/signuplight.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SigninlistComponent } from './auth/signinlist/signinlist.component';

// --------------------------------------------------------
// ---------------------- partA home ---------------------- :
// --------------------------------------------------------

// import { Part01ReservationHomeComponent } from './part01-reservation-home/part01-reservation-home.component';
// import { Part01RestoHomeComponent } from './part01-resto-home/part01-resto-home.component';
// import { Part01EditionHomeComponent } from './part01-edition-home/part01-edition-home.component';

// --------------------------------------------------------
// ------------- partA / reservation (order) -------------- :
// --------------------------------------------------------

// import { OrderReservationHomeComponent } from './order-reservation-home/order-reservation-home.component';
// import { OrderReservationListComponent } from './order-reservation-list/order-reservation-list.component';
// import { OrderReservationComponent } from './order-reservation/order-reservation.component';

// import { OrderReservationConfirmationComponent } from './order-reservation-confirmation/order-reservation-confirmation.component';
// import { OrderReservationListConfirmComponent } from './order-reservation-list-confirm/order-reservation-list-confirm.component';
// import { OrderReservationShowResultComponent } from './order-reservation-show-result/order-reservation-show-result.component';
// import { OrderReservationResultComponent } from './order-reservation-result/order-reservation-result.component';

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
import { AuthGuardService } from './services/auth-guard.service';

// total :
// ------
// import { AbcdefghijklComponent } from './restos/total/abcdefghijkl/abcdefghijkl.component';


// payment :
// -------
// import { PaymentComponent } from './restos/total/payment/payment.component';

// -------------------------------------------------------
// ------------ partA / edition (book-list) -------------- :
// -------------------------------------------------------

// ------------ mise en page par blocs -------------

// { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },

// mise en page par blocs / blocs :
// ------------------------------

// { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
// { path: 'bookAs/new', canActivate: [AuthGuardService], component: BookFormAComponent },
// { path: 'bookBs/new', canActivate: [AuthGuardService], component: BookFormBComponent },
// { path: 'bookCs/new', canActivate: [AuthGuardService], component: BookFormCComponent },
// { path: 'bookDs/new', canActivate: [AuthGuardService], component: BookFormDComponent },
// { path: 'bookEs/new', canActivate: [AuthGuardService], component: BookFormEComponent },
// { path: 'bookFs/new', canActivate: [AuthGuardService], component: BookFormFComponent },

// ---------- cas particulier ----------
// { path: 'bookGs/new', canActivate: [AuthGuardService], component: BookFormGComponent },
// -------------------------------------

// { path: 'bookHs/new', canActivate: [AuthGuardService], component: BookFormHComponent },
// { path: 'bookIs/new', canActivate: [AuthGuardService], component: BookFormIComponent },
// { path: 'bookJs/new', canActivate: [AuthGuardService], component: BookFormJComponent },
// { path: 'bookKs/new', canActivate: [AuthGuardService], component: BookFormKComponent },
// { path: 'bookLs/new', canActivate: [AuthGuardService], component: BookFormLComponent },

// mise en page par blocs / single pages :
// -------------------------------------

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
// --------------------------------------------
// import { BackofficeComponent } from './book-list/backoffice/backoffice.component';

// mise en page par blocs / archives :
// ---------------------------------
// import { ArchivesComponent } from './book-list/archives/archives.component';

// ------------- visuels --------------

// visuels / upload (image A) :
// --------------------------
// import { ImagesComponent } from './book-list/images/images.component';

// visuels / upload archives (image archive A) :
// -------------------------------------------
// import { ImageArchiveComponent } from './book-list/images/image-archive/image-archive.component';

// visuels / upload blocs :
// ----------------------
// // import { ImageAComponent } from './book-list/images/image-a/image-a.component';
// import { ImageBComponent } from './book-list/images/image-b/image-b.component';
// import { ImageCComponent } from './book-list/images/image-c/image-c.component';
// import { ImageDComponent } from './book-list/images/image-d/image-d.component';
// import { ImageEComponent } from './book-list/images/image-e/image-e.component';
// import { ImageFComponent } from './book-list/images/image-f/image-f.component';
// import { ImageGComponent } from './book-list/images/image-g/image-g.component';
// import { ImageHComponent } from './book-list/images/image-h/image-h.component';
// import { ImageIComponent } from './book-list/images/image-i/image-i.component';
// import { ImageJComponent } from './book-list/images/image-j/image-j.component';
// import { ImageKComponent } from './book-list/images/image-k/image-k.component';
// import { ImageLComponent } from './book-list/images/image-l/image-l.component';

// visuels / upload blocs archives :
// -------------------------------
// import { ImageBArchiveComponent } from './book-list/images/image-b-archive/image-b-archive.component';
// import { ImageCArchiveComponent } from './book-list/images/image-c-archive/image-c-archive.component';
// import { ImageDArchiveComponent } from './book-list/images/image-d-archive/image-d-archive.component';
// import { ImageEArchiveComponent } from './book-list/images/image-e-archive/image-e-archive.component';
// import { ImageFArchiveComponent } from './book-list/images/image-f-archive/image-f-archive.component';
// import { ImageGArchiveComponent } from './book-list/images/image-g-archive/image-g-archive.component';
// import { ImageHArchiveComponent } from './book-list/images/image-h-archive/image-h-archive.component';
// import { ImageIArchiveComponent } from './book-list/images/image-i-archive/image-i-archive.component';
// import { ImageJArchiveComponent } from './book-list/images/image-j-archive/image-j-archive.component';
// import { ImageKArchiveComponent } from './book-list/images/image-k-archive/image-k-archive.component';
// import { ImageLArchiveComponent } from './book-list/images/image-l-archive/image-l-archive.component';

// visuels / image list :
// --------------------
// import { ImageListComponent } from './book-list/images/imagelist/imagelist.component';
// import { ImageListAComponent } from './book-list/images/imagelist-a/imagelist-a.component';
// import { ImageListBComponent } from './book-list/images/imagelist-b/imagelist-b.component';
// import { ImageListCComponent } from './book-list/images/imagelist-c/imagelist-c.component';
// import { ImageListDComponent } from './book-list/images/imagelist-d/imagelist-d.component';
// import { ImageListEComponent } from './book-list/images/imagelist-e/imagelist-e.component';
// import { ImageListFComponent } from './book-list/images/imagelist-f/imagelist-f.component';
// import { ImageListGComponent } from './book-list/images/imagelist-g/imagelist-g.component';
// import { ImageListHComponent } from './book-list/images/imagelist-h/imagelist-h.component';
// import { ImageListIComponent } from './book-list/images/imagelist-i/imagelist-i.component';
// import { ImageListJComponent } from './book-list/images/imagelist-j/imagelist-j.component';
// import { ImageListKComponent } from './book-list/images/imagelist-k/imagelist-k.component';
// import { ImageListLComponent } from './book-list/images/imagelist-l/imagelist-l.component';

// --------------------------------------------------
// -------- partB / Photo Gallery > Aside ---------- :
// --------------------------------------------------
  
// import { AsideComponent } from './aside/aside.component';

// reservation

// import { OrderReservationService } from "./services/order-reservation.service";

// resto

// import { MatrixService } from "./services/resto/matrix.service";
// import { AService } from "./services/resto/a.service";
// import { BService } from "./services/resto/b.service";
// import { CService } from "./services/resto/c.service";
// import { DService } from "./services/resto/d.service";
// import { EService } from "./services/resto/e.service";
// import { FService } from "./services/resto/f.service";
// import { GService } from "./services/resto/g.service";
// import { HService } from "./services/resto/h.service";
// import { IService } from "./services/resto/i.service";
// import { JService } from "./services/resto/j.service";
// import { KService } from "./services/resto/k.service";
// import { LService } from "./services/resto/l.service";

// images

// import { ImageService } from "./services/image.service";


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

  // -----
  // auth :
  // -----

  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signinlist', component: SigninlistComponent },

  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signuplight', component: SignupLightComponent },

  // --------------------------------------------------------
  // ---------------------- partA home ---------------------- :
  // --------------------------------------------------------

  // { path: 'reservation', canActivate: [AuthGuardService], component: Part01ReservationHomeComponent },
  // { path: 'resto', component: Part01RestoHomeComponent },
  // { path: 'edition', canActivate: [AuthGuardService], component: Part01EditionHomeComponent },

  // --------------------------------------------------------
  // ------------- partA / reservation (order) -------------- :
  // --------------------------------------------------------

  // { path: 'lazyReservationHome', component: OrderReservationHomeComponent },
  // { path: 'lazyReservation', component: OrderReservationComponent },
  // { path: 'lazyReservationList', component: OrderReservationListComponent },

  // show :
  // { path: 'show', component: OrderReservationResultComponent },

  // result - confirmation :
  // { path: 'result', component: OrderReservationShowResultComponent },
  // { path: 'confirmation', component: OrderReservationResultComponent },

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
  // { path: 'abcdefghijkl', canActivate: [AuthGuardService], component: AbcdefghijklComponent },

  // payment :
  // -------
  // { path: 'payment', canActivate: [AuthGuardService], component: PaymentComponent }

  // -------------------------------------------------------
  // ------------ partA / edition (book-list) -------------- :
  // -------------------------------------------------------

  // ------------ mise en page par blocs -------------

  // { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },

  // mise en page par blocs / blocs :
  // ------------------------------
  // { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
  // { path: 'bookAs/new', canActivate: [AuthGuardService], component: BookFormAComponent },
  // { path: 'bookBs/new', canActivate: [AuthGuardService], component: BookFormBComponent },
  // { path: 'bookCs/new', canActivate: [AuthGuardService], component: BookFormCComponent },
  // { path: 'bookDs/new', canActivate: [AuthGuardService], component: BookFormDComponent },
  // { path: 'bookEs/new', canActivate: [AuthGuardService], component: BookFormEComponent },
  // { path: 'bookFs/new', canActivate: [AuthGuardService], component: BookFormFComponent },

  // ---------- cas particulier ----------
  // { path: 'bookGs/new', canActivate: [AuthGuardService], component: BookFormGComponent },
  // -------------------------------------

  // { path: 'bookHs/new', canActivate: [AuthGuardService], component: BookFormHComponent },
  // { path: 'bookIs/new', canActivate: [AuthGuardService], component: BookFormIComponent },
  // { path: 'bookJs/new', canActivate: [AuthGuardService], component: BookFormJComponent },
  // { path: 'bookKs/new', canActivate: [AuthGuardService], component: BookFormKComponent },
  // { path: 'bookLs/new', canActivate: [AuthGuardService], component: BookFormLComponent },

  // mise en page par blocs / single pages :
  // -------------------------------------
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
  // --------------------------------------------
  // { path: 'backoffice', canActivate: [AuthGuardService], component: BackofficeComponent },

  // mise en page par blocs / archives :
  // ---------------------------------
  // { path: 'archives', canActivate: [AuthGuardService], component: ArchivesComponent },

  // ------------- visuels --------------

  // { path: 'image', canActivate: [AuthGuardService], component: ImagesComponent },

  // visuels / upload (upload A) :
  // ---------------------------
  // { path: 'upload', canActivate: [AuthGuardService], component: ImageComponent },

  // visuels / upload archives (upload archive A) :
  // --------------------------------------------
  // { path: 'uploadArchive', canActivate: [AuthGuardService], component: ImageArchiveComponent },

  // visuels / upload blocs :
  // ----------------------
  // // { path: 'uploadA', component: ImageAComponent },
  // { path: 'uploadB', canActivate: [AuthGuardService], component: ImageBComponent },
  // { path: 'uploadC', canActivate: [AuthGuardService], component: ImageCComponent },
  // { path: 'uploadD', canActivate: [AuthGuardService], component: ImageDComponent },
  // { path: 'uploadE', canActivate: [AuthGuardService], component: ImageEComponent },
  // { path: 'uploadF', canActivate: [AuthGuardService], component: ImageFComponent },
  // { path: 'uploadG', canActivate: [AuthGuardService], component: ImageGComponent },
  // { path: 'uploadH', canActivate: [AuthGuardService], component: ImageHComponent },
  // { path: 'uploadI', canActivate: [AuthGuardService], component: ImageIComponent },
  // { path: 'uploadJ', canActivate: [AuthGuardService], component: ImageJComponent },
  // { path: 'uploadK', canActivate: [AuthGuardService], component: ImageKComponent },
  // { path: 'uploadL', canActivate: [AuthGuardService], component: ImageLComponent },

  // visuels / upload archives blocs :
  // -------------------------------
  // { path: 'uploadArchiveB', canActivate: [AuthGuardService], component: ImageBArchiveComponent },
  // { path: 'uploadArchiveC', canActivate: [AuthGuardService], component: ImageCArchiveComponent },
  // { path: 'uploadArchiveD', canActivate: [AuthGuardService], component: ImageDArchiveComponent },
  // { path: 'uploadArchiveE', canActivate: [AuthGuardService], component: ImageEArchiveComponent },
  // { path: 'uploadArchiveF', canActivate: [AuthGuardService], component: ImageFArchiveComponent },
  // { path: 'uploadArchiveG', canActivate: [AuthGuardService], component: ImageGArchiveComponent },
  // { path: 'uploadArchiveH', canActivate: [AuthGuardService], component: ImageHArchiveComponent },
  // { path: 'uploadArchiveI', canActivate: [AuthGuardService], component: ImageIArchiveComponent },
  // { path: 'uploadArchiveJ', canActivate: [AuthGuardService], component: ImageJArchiveComponent },
  // { path: 'uploadArchiveK', canActivate: [AuthGuardService], component: ImageKArchiveComponent },
  // { path: 'uploadArchiveL', canActivate: [AuthGuardService], component: ImageLArchiveComponent },

  // visuels / image list :
  // --------------------
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

  // --------------------------------------------------
  // -------- partB / Photo Gallery > Aside ---------- :
  // --------------------------------------------------
  
  // { path: 'aside', component: AsideComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
