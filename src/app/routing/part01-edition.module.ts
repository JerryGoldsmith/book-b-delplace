import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPreloadStrategy } from '../pre-loading/auth-preload-strategy';

import { CommonFormReactiveModule } from 'src/app/routing/common-form-reactive.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import * as fr from "@angular/common/locales/fr"; // date

// guard
import { AuthGuardService } from 'src/app/services/auth-guard.service';

// home
// import { Part01EditionHomeComponent } from 'src/app/part01-edition-home/part01-edition-home.component';

// backoffice
// import { Part01BackofficeHomeComponent } from 'src/app/part01-backoffice-home/part01-backoffice-home.component';

import { ArchivesComponent } from 'src/app/edition/archives/archives.component';

// book-form
import { BookFormComponent } from 'src/app/edition/book-form/book-form.component';
import { BookFormBComponent } from 'src/app/edition/book-form-b/book-form-b.component';
import { BookFormCComponent } from 'src/app/edition/book-form-c/book-form-c.component';
import { BookFormDComponent } from 'src/app/edition/book-form-d/book-form-d.component';
import { BookFormEComponent } from 'src/app/edition/book-form-e/book-form-e.component';
import { BookFormFComponent } from 'src/app/edition/book-form-f/book-form-f.component';
import { BookFormGComponent } from 'src/app/edition/book-form-g/book-form-g.component';
import { BookFormHComponent } from 'src/app/edition/book-form-h/book-form-h.component';
import { BookFormIComponent } from 'src/app/edition/book-form-i/book-form-i.component';
import { BookFormJComponent } from 'src/app/edition/book-form-j/book-form-j.component';
import { BookFormKComponent } from 'src/app/edition/book-form-k/book-form-k.component';
import { BookFormLComponent } from 'src/app/edition/book-form-l/book-form-l.component';

// single-book
import { SingleBookComponent } from 'src/app/edition/single-book/single-book.component';
import { SingleBookBComponent } from 'src/app/edition/single-book-b/single-book-b.component';
import { SingleBookCComponent } from 'src/app/edition/single-book-c/single-book-c.component';
import { SingleBookDComponent } from 'src/app/edition/single-book-d/single-book-d.component';
import { SingleBookEComponent } from 'src/app/edition/single-book-e/single-book-e.component';
import { SingleBookFComponent } from 'src/app/edition/single-book-f/single-book-f.component';
import { SingleBookGComponent } from 'src/app/edition/single-book-g/single-book-g.component';
import { SingleBookHComponent } from 'src/app/edition/single-book-h/single-book-h.component';
import { SingleBookIComponent } from 'src/app/edition/single-book-i/single-book-i.component';
import { SingleBookJComponent } from 'src/app/edition/single-book-j/single-book-j.component';
import { SingleBookKComponent } from 'src/app/edition/single-book-k/single-book-k.component';
import { SingleBookLComponent } from 'src/app/edition/single-book-l/single-book-l.component';

// single-book-archives
import { SingleBookAllComponent } from 'src/app/edition/single-book-all/single-book-all.component';
import { SingleBookAllOneComponent } from 'src/app/edition/single-book-all-one/single-book-all-one.component';
import { SingleBookAllTwoComponent } from 'src/app/edition/single-book-all-two/single-book-all-two.component';
import { SingleBookAllThreeComponent } from 'src/app/edition/single-book-all-three/single-book-all-three.component';
import { SingleBookAllFourComponent } from 'src/app/edition/single-book-all-four/single-book-all-four.component';
import { SingleBookAllFiveComponent } from 'src/app/edition/single-book-all-five/single-book-all-five.component';
import { SingleBookAllSixComponent } from 'src/app/edition/single-book-all-six/single-book-all-six.component';

const routes: Routes = [

  { // Part01EditionHomeComponent
    path: 'edition',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/edition-rendu/edition-rendu.module')
      .then(mod => mod.EditionRenduModule)
  },
  { // Part01BackofficeHomeComponent
    path: 'backoffice',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/edition-backoffice/edition-backoffice.module')
      .then(mod => mod.EditionBackofficeModule)
  },

  // {
  //   path: 'archives',
  //   canActivate: [AuthGuardService],
  //   loadChildren: () => import('src/app/mod/private/edition-archives/edition-archives.module')
  //     .then(mod => mod.EditionArchivesModule)
  // }

    // { path: 'edition', component: Part01EditionHomeComponent },

    // { path: 'backoffice', component: Part01BackofficeHomeComponent },

    { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
    { path: 'bookBs/new', canActivate: [AuthGuardService], component: BookFormBComponent },
    { path: 'bookCs/new', canActivate: [AuthGuardService], component: BookFormCComponent },
    { path: 'bookDs/new', canActivate: [AuthGuardService], component: BookFormDComponent },
    { path: 'bookEs/new', canActivate: [AuthGuardService], component: BookFormEComponent },
    { path: 'bookFs/new', canActivate: [AuthGuardService], component: BookFormFComponent },

    { path: 'bookGs/new', canActivate: [AuthGuardService], component: BookFormGComponent },

    { path: 'bookHs/new', canActivate: [AuthGuardService], component: BookFormHComponent },
    { path: 'bookIs/new', canActivate: [AuthGuardService], component: BookFormIComponent },
    { path: 'bookJs/new', canActivate: [AuthGuardService], component: BookFormJComponent },
    { path: 'bookKs/new', canActivate: [AuthGuardService], component: BookFormKComponent },
    { path: 'bookLs/new', canActivate: [AuthGuardService], component: BookFormLComponent },

    { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
    { path: 'bookBs/view/:id', canActivate: [AuthGuardService], component: SingleBookBComponent },
    { path: 'bookCs/view/:id', canActivate: [AuthGuardService], component: SingleBookCComponent },
    { path: 'bookDs/view/:id', canActivate: [AuthGuardService], component: SingleBookDComponent },
    { path: 'bookEs/view/:id', canActivate: [AuthGuardService], component: SingleBookEComponent },
    { path: 'bookFs/view/:id', canActivate: [AuthGuardService], component: SingleBookFComponent },
    { path: 'bookGs/view/:id', canActivate: [AuthGuardService], component: SingleBookGComponent },
    { path: 'bookHs/view/:id', canActivate: [AuthGuardService], component: SingleBookHComponent },
    { path: 'bookIs/view/:id', canActivate: [AuthGuardService], component: SingleBookIComponent },
    { path: 'bookJs/view/:id', canActivate: [AuthGuardService], component: SingleBookJComponent },
    { path: 'bookKs/view/:id', canActivate: [AuthGuardService], component: SingleBookKComponent },
    { path: 'bookLs/view/:id', canActivate: [AuthGuardService], component: SingleBookLComponent },

    { path: 'bookAlls/view/:id', canActivate: [AuthGuardService], component: SingleBookAllComponent },
    { path: 'bookAllOnes/view/:id', canActivate: [AuthGuardService], component: SingleBookAllOneComponent },
    { path: 'bookAllTwos/view/:id', canActivate: [AuthGuardService], component: SingleBookAllTwoComponent },
    { path: 'bookAllThrees/view/:id', canActivate: [AuthGuardService], component: SingleBookAllThreeComponent },
    { path: 'bookAllFours/view/:id', canActivate: [AuthGuardService], component: SingleBookAllFourComponent },
    { path: 'bookAllFives/view/:id', canActivate: [AuthGuardService], component: SingleBookAllFiveComponent },
    { path: 'bookAllSixs/view/:id', canActivate: [AuthGuardService], component: SingleBookAllSixComponent },

    { path: 'archives', canActivate: [AuthGuardService], component: ArchivesComponent }

];

@NgModule({
    declarations: [
      // Part01EditionHomeComponent, // home
      // Part01BackofficeHomeComponent,

      ArchivesComponent,

      BookFormComponent,
      BookFormBComponent,
      BookFormCComponent,
      BookFormDComponent,
      BookFormEComponent,
      BookFormFComponent,
      BookFormGComponent,
      BookFormHComponent,
      BookFormIComponent,
      BookFormJComponent,
      BookFormKComponent,
      BookFormLComponent,

      SingleBookComponent,
      SingleBookBComponent,
      SingleBookCComponent,
      SingleBookDComponent,
      SingleBookEComponent,
      SingleBookFComponent,
      SingleBookGComponent,
      SingleBookHComponent,
      SingleBookIComponent,
      SingleBookJComponent,
      SingleBookKComponent,
      SingleBookLComponent,

      SingleBookAllComponent,
      SingleBookAllOneComponent,
      SingleBookAllTwoComponent,
      SingleBookAllThreeComponent,
      SingleBookAllFourComponent,
      SingleBookAllFiveComponent,
      SingleBookAllSixComponent
      ],
    imports: [
        RouterModule.forRoot(routes,
          { preloadingStrategy: AuthPreloadStrategy }),
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        CommonFormReactiveModule
      ],
    exports: [
      RouterModule
    ],
    providers: [
        AuthGuardService
    ]})

export class Part01EditionModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}