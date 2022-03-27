import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPreloadStrategy } from '../pre-loading/auth-preload-strategy';

import { CommonFormReactiveModule } from 'src/app/routing/common-form-reactive.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import * as fr from "@angular/common/locales/fr"; // date

// guard
import { AuthGuardService } from 'src/app/services/auth-guard.service';

// single-book-archives
// import { SingleBookAllComponent } from 'src/app/edition/single-book-all/single-book-all.component';
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

  // ----------


  // edition/archives.component
  {
    path: 'archives',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/edition-archives/edition-archives.module')
      .then(mod => mod.EditionArchivesModule)
  },

  // ---------

  // edition/book-form.compoment
  {
    path: 'books/new',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/book-form-a/book-form-a.module')
      .then(mod => mod.BookFormAModule)
  },
  {
    path: 'bookBs/new',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/book-form-b/book-form-b.module')
      .then(mod => mod.BookFormBModule)
  },
  {
    path: 'bookCs/new',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/book-form-c/book-form-c.module')
      .then(mod => mod.BookFormCModule)
  },
  {
    path: 'bookDs/new',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/book-form-d/book-form-d.module')
      .then(mod => mod.BookFormDModule)
  },
  {
    path: 'bookEs/new',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/book-form-e/book-form-e.module')
      .then(mod => mod.BookFormEModule)
  },
  {
    path: 'bookFs/new',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/book-form-f/book-form-f.module')
      .then(mod => mod.BookFormFModule)
  },
  {
    path: 'bookGs/new',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/book-form-g/book-form-g.module')
      .then(mod => mod.BookFormGModule)
  },
  {
    path: 'bookHs/new',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/book-form-h/book-form-h.module')
      .then(mod => mod.BookFormHModule)
  },
  {
    path: 'bookIs/new',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/book-form-i/book-form-i.module')
      .then(mod => mod.BookFormIModule)
  },
  {
    path: 'bookJs/new',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/book-form-j/book-form-j.module')
      .then(mod => mod.BookFormJModule)
  },
  {
    path: 'bookKs/new',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/book-form-k/book-form-k.module')
      .then(mod => mod.BookFormKModule)
  },
  {
    path: 'bookLs/new',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/book-form-l/book-form-l.module')
      .then(mod => mod.BookFormLModule)
  },

  // ---------

  // edition/book-single.compoment
  {
    path: 'books/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-a/book-single-a.module')
      .then(mod => mod.BookSingleAModule)
  },
  {
    path: 'bookBs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-b/book-single-b.module')
      .then(mod => mod.BookSingleBModule)
  },
  {
    path: 'bookCs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-c/book-single-c.module')
      .then(mod => mod.BookSingleCModule)
  },
  {
    path: 'bookDs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-d/book-single-d.module')
      .then(mod => mod.BookSingleDModule)
  },
  {
    path: 'bookEs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-e/book-single-e.module')
      .then(mod => mod.BookSingleEModule)
  },
  {
    path: 'bookFs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-f/book-single-f.module')
      .then(mod => mod.BookSingleFModule)
  },
  {
    path: 'bookGs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-g/book-single-g.module')
      .then(mod => mod.BookSingleGModule)
  },
  {
    path: 'bookHs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-h/book-single-h.module')
      .then(mod => mod.BookSingleHModule)
  },
  {
    path: 'bookIs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-i/book-single-i.module')
      .then(mod => mod.BookSingleIModule)
  },
  {
    path: 'bookJs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-j/book-single-j.module')
      .then(mod => mod.BookSingleJModule)
  },
  {
    path: 'bookKs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-k/book-single-k.module')
      .then(mod => mod.BookSingleKModule)
  },
  {
    path: 'bookLs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-l/book-single-l.module')
      .then(mod => mod.BookSingleLModule)
  },

    // { path: 'bookAlls/view/:id', canActivate: [AuthGuardService], component: SingleBookAllComponent },
    { path: 'bookAllOnes/view/:id', canActivate: [AuthGuardService], component: SingleBookAllOneComponent },
    { path: 'bookAllTwos/view/:id', canActivate: [AuthGuardService], component: SingleBookAllTwoComponent },
    { path: 'bookAllThrees/view/:id', canActivate: [AuthGuardService], component: SingleBookAllThreeComponent },
    { path: 'bookAllFours/view/:id', canActivate: [AuthGuardService], component: SingleBookAllFourComponent },
    { path: 'bookAllFives/view/:id', canActivate: [AuthGuardService], component: SingleBookAllFiveComponent },
    { path: 'bookAllSixs/view/:id', canActivate: [AuthGuardService], component: SingleBookAllSixComponent }

];

@NgModule({
    declarations: [

      // SingleBookAllComponent,
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