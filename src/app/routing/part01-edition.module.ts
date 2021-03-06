import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonFormReactiveModule } from 'src/app/routing/common-form-reactive.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import * as fr from "@angular/common/locales/fr"; // date

// guard
import { AuthGuardService } from 'src/app/services/auth-guard.service';

import { LazyImgDirective } from 'src/app/directives/lazy-img.directive';
import { AuthPreloadStrategy } from '../pre-loading/auth-preload-strategy';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const routes: Routes = [

  { // Part01EditionHomeComponent
    path: 'edition',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/edition-rendu/edition-rendu.module')
      .then(mod => mod.EditionRenduModule),
      data: { preload: true, delay:1000 }
  },
  { // Part01BackofficeHomeComponent
    path: 'backoffice',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/edition-backoffice/edition-backoffice.module')
      .then(mod => mod.EditionBackofficeModule),
      data: { preload: true, delay:2000 }
  },

  // ----------


  // edition/archives.component
  {
    path: 'archives',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/edition-archives/edition-archives.module')
      .then(mod => mod.EditionArchivesModule),
      data: { preload: true, delay:3000 }
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
      .then(mod => mod.BookSingleAModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookBs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-b/book-single-b.module')
      .then(mod => mod.BookSingleBModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookCs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-c/book-single-c.module')
      .then(mod => mod.BookSingleCModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookDs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-d/book-single-d.module')
      .then(mod => mod.BookSingleDModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookEs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-e/book-single-e.module')
      .then(mod => mod.BookSingleEModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookFs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-f/book-single-f.module')
      .then(mod => mod.BookSingleFModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookGs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-g/book-single-g.module')
      .then(mod => mod.BookSingleGModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookHs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-h/book-single-h.module')
      .then(mod => mod.BookSingleHModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookIs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-i/book-single-i.module')
      .then(mod => mod.BookSingleIModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookJs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-j/book-single-j.module')
      .then(mod => mod.BookSingleJModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookKs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-k/book-single-k.module')
      .then(mod => mod.BookSingleKModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookLs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-l/book-single-l.module')
      .then(mod => mod.BookSingleLModule),
      data: { preload: true, delay:3000 }
  },

  // -----------

  // edition/book-single-all.compoment
  {
    path: 'bookAlls/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-all/book-single-all.module')
      .then(mod => mod.BookSingleAllModule),
      data: { preload: true, delay:3000 }
  },

  // edition/book-single-all-one---six.compoment
  {
    path: 'bookAllOnes/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-all-one/book-single-all-one.module')
      .then(mod => mod.BookSingleAllOneModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookAllTwos/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-all-two/book-single-all-two.module')
      .then(mod => mod.BookSingleAllTwoModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookAllThrees/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-all-three/book-single-all-three.module')
      .then(mod => mod.BookSingleAllThreeModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookAllFours/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-all-four/book-single-all-four.module')
      .then(mod => mod.BookSingleAllFourModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookAllFives/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-all-five/book-single-all-five.module')
      .then(mod => mod.BookSingleAllFiveModule),
      data: { preload: true, delay:3000 }
  },
  {
    path: 'bookAllSixs/view/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/books/booksSingle/book-single-all-six/book-single-all-six.module')
      .then(mod => mod.BookSingleAllSixModule),
      data: { preload: true, delay:3000 }
  }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,
        { preloadingStrategy: AuthPreloadStrategy }),
        LazyLoadImageModule,
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        CommonFormReactiveModule
      ],
    exports: [
      RouterModule
    ],
    providers: [
        AuthGuardService,
        AuthPreloadStrategy,
        LazyImgDirective
    ]})

export class Part01EditionModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}