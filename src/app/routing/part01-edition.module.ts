import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPreloadStrategy } from '../pre-loading/auth-preload-strategy';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { AuthGuardService } from 'src/app/services/auth-guard.service';

import { Part01EditionHomeComponent } from 'src/app/part01-edition-home/part01-edition-home.component';

import { ArchivesComponent } from 'src/app/book-list/archives/archives.component';
import { BackofficeComponent } from 'src/app/book-list/backoffice/backoffice.component';

import { BookListComponent } from 'src/app/book-list/book-list.component';

// book-form
import { BookFormComponent } from 'src/app/book-list/book-form/book-form.component';
import { BookFormBComponent } from 'src/app/book-list/book-form-b/book-form-b.component';
import { BookFormCComponent } from 'src/app/book-list/book-form-c/book-form-c.component';
import { BookFormDComponent } from 'src/app/book-list/book-form-d/book-form-d.component';
import { BookFormEComponent } from 'src/app/book-list/book-form-e/book-form-e.component';
import { BookFormFComponent } from 'src/app/book-list/book-form-f/book-form-f.component';
import { BookFormGComponent } from 'src/app/book-list/book-form-g/book-form-g.component';
import { BookFormHComponent } from 'src/app/book-list/book-form-h/book-form-h.component';
import { BookFormIComponent } from 'src/app/book-list/book-form-i/book-form-i.component';
import { BookFormJComponent } from 'src/app/book-list/book-form-j/book-form-j.component';
import { BookFormKComponent } from 'src/app/book-list/book-form-k/book-form-k.component';
import { BookFormLComponent } from 'src/app/book-list/book-form-l/book-form-l.component';

// single-book
import { SingleBookComponent } from 'src/app/book-list/single-book/single-book.component';
import { SingleBookBComponent } from 'src/app/book-list/single-book-b/single-book-b.component';
import { SingleBookCComponent } from 'src/app/book-list/single-book-c/single-book-c.component';
import { SingleBookDComponent } from 'src/app/book-list/single-book-d/single-book-d.component';
import { SingleBookEComponent } from 'src/app/book-list/single-book-e/single-book-e.component';
import { SingleBookFComponent } from 'src/app/book-list/single-book-f/single-book-f.component';
import { SingleBookGComponent } from 'src/app/book-list/single-book-g/single-book-g.component';
import { SingleBookHComponent } from 'src/app/book-list/single-book-h/single-book-h.component';
import { SingleBookIComponent } from 'src/app/book-list/single-book-i/single-book-i.component';
import { SingleBookJComponent } from 'src/app/book-list/single-book-j/single-book-j.component';
import { SingleBookKComponent } from 'src/app/book-list/single-book-k/single-book-k.component';
import { SingleBookLComponent } from 'src/app/book-list/single-book-l/single-book-l.component';

// single-book-archives
import { SingleBookAllComponent } from 'src/app/book-list/single-book-all/single-book-all.component';
import { SingleBookAllOneComponent } from 'src/app/book-list/single-book-all-one/single-book-all-one.component';
import { SingleBookAllTwoComponent } from 'src/app/book-list/single-book-all-two/single-book-all-two.component';
import { SingleBookAllThreeComponent } from 'src/app/book-list/single-book-all-three/single-book-all-three.component';
import { SingleBookAllFourComponent } from 'src/app/book-list/single-book-all-four/single-book-all-four.component';
import { SingleBookAllFiveComponent } from 'src/app/book-list/single-book-all-five/single-book-all-five.component';
import { SingleBookAllSixComponent } from 'src/app/book-list/single-book-all-six/single-book-all-six.component';

// images

import { ImagesComponent } from 'src/app/book-list/images/images.component';

import { ImageComponent } from 'src/app/book-list/images/image/image.component';
import { ImageArchiveComponent } from 'src/app/book-list/images/image-archive/image-archive.component';
// import { ImageBComponent } from 'src/app/book-list/images/image-b/image-b.component';
// import { ImageBArchiveComponent } from 'src/app/book-list/images/image-b-archive/image-b-archive.component';
// import { ImageCComponent } from 'src/app/book-list/images/image-c/image-c.component';
// import { ImageCArchiveComponent } from 'src/app/book-list/images/image-c-archive/image-c-archive.component';
// import { ImageDComponent } from 'src/app/book-list/images/image-d/image-d.component';
// import { ImageDArchiveComponent } from 'src/app/book-list/images/image-d-archive/image-d-archive.component';
// import { ImageEComponent } from 'src/app/book-list/images/image-e/image-e.component';
// import { ImageEArchiveComponent } from 'src/app/book-list/images/image-e-archive/image-e-archive.component';
// import { ImageFComponent } from 'src/app/book-list/images/image-f/image-f.component';
// import { ImageFArchiveComponent } from 'src/app/book-list/images/image-f-archive/image-f-archive.component';
// import { ImageGComponent } from 'src/app/book-list/images/image-g/image-g.component';
// import { ImageGArchiveComponent } from 'src/app/book-list/images/image-g-archive/image-g-archive.component';
// import { ImageHComponent } from 'src/app/book-list/images/image-h/image-h.component';
// import { ImageHArchiveComponent } from 'src/app/book-list/images/image-h-archive/image-h-archive.component';
// import { ImageIComponent } from 'src/app/book-list/images/image-i/image-i.component';
// import { ImageIArchiveComponent } from 'src/app/book-list/images/image-i-archive/image-i-archive.component';
// import { ImageJComponent } from 'src/app/book-list/images/image-j/image-j.component';
// import { ImageJArchiveComponent } from 'src/app/book-list/images/image-j-archive/image-j-archive.component';
// import { ImageKComponent } from 'src/app/book-list/images/image-k/image-k.component';
// import { ImageKArchiveComponent } from 'src/app/book-list/images/image-k-archive/image-k-archive.component';
// import { ImageLComponent } from 'src/app/book-list/images/image-l/image-l.component';
// import { ImageLArchiveComponent } from 'src/app/book-list/images/image-l-archive/image-l-archive.component';

// import { ImageListComponent } from 'src/app/book-list/images/imagelist/imagelist.component';
// import { ImageListBComponent } from 'src/app/book-list/images/imagelist-b/imagelist-b.component';
// import { ImageListCComponent } from 'src/app/book-list/images/imagelist-c/imagelist-c.component';
// import { ImageListDComponent } from 'src/app/book-list/images/imagelist-d/imagelist-d.component';
// import { ImageListEComponent } from 'src/app/book-list/images/imagelist-e/imagelist-e.component';
// import { ImageListFComponent } from 'src/app/book-list/images/imagelist-f/imagelist-f.component';
// import { ImageListGComponent } from 'src/app/book-list/images/imagelist-g/imagelist-g.component';
// import { ImageListHComponent } from 'src/app/book-list/images/imagelist-h/imagelist-h.component';
// import { ImageListIComponent } from 'src/app/book-list/images/imagelist-i/imagelist-i.component';
// import { ImageListJComponent } from 'src/app/book-list/images/imagelist-j/imagelist-j.component';
// import { ImageListKComponent } from 'src/app/book-list/images/imagelist-k/imagelist-k.component';
// import { ImageListLComponent } from 'src/app/book-list/images/imagelist-l/imagelist-l.component';

const routes: Routes = [
    { path: 'edition', component: Part01EditionHomeComponent },

    { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },

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

  { path: 'backoffice', canActivate: [AuthGuardService], component: BackofficeComponent },
  { path: 'archives', canActivate: [AuthGuardService], component: ArchivesComponent },

  // images

  { path: 'image', canActivate: [AuthGuardService], component: ImagesComponent },

  { path: 'upload', canActivate: [AuthGuardService], component: ImageComponent },
  { path: 'uploadArchive', canActivate: [AuthGuardService], component: ImageArchiveComponent }
//   { path: 'uploadB', canActivate: [AuthGuardService], component: ImageBComponent },
//   { path: 'uploadArchiveB', canActivate: [AuthGuardService], component: ImageBArchiveComponent },
//   { path: 'uploadC', canActivate: [AuthGuardService], component: ImageCComponent },
//   { path: 'uploadArchiveC', canActivate: [AuthGuardService], component: ImageCArchiveComponent },
//   { path: 'uploadD', canActivate: [AuthGuardService], component: ImageDComponent },
//   { path: 'uploadArchiveD', canActivate: [AuthGuardService], component: ImageDArchiveComponent },
//   { path: 'uploadE', canActivate: [AuthGuardService], component: ImageEComponent },
//   { path: 'uploadArchiveE', canActivate: [AuthGuardService], component: ImageEArchiveComponent },
//   { path: 'uploadF', canActivate: [AuthGuardService], component: ImageFComponent },
//   { path: 'uploadArchiveF', canActivate: [AuthGuardService], component: ImageFArchiveComponent },
//   { path: 'uploadG', canActivate: [AuthGuardService], component: ImageGComponent },
//   { path: 'uploadArchiveG', canActivate: [AuthGuardService], component: ImageGArchiveComponent },
//   { path: 'uploadH', canActivate: [AuthGuardService], component: ImageHComponent },
//   { path: 'uploadArchiveH', canActivate: [AuthGuardService], component: ImageHArchiveComponent },
//   { path: 'uploadI', canActivate: [AuthGuardService], component: ImageIComponent },
//   { path: 'uploadArchiveI', canActivate: [AuthGuardService], component: ImageIArchiveComponent },
//   { path: 'uploadJ', canActivate: [AuthGuardService], component: ImageJComponent },
//   { path: 'uploadArchiveJ', canActivate: [AuthGuardService], component: ImageJArchiveComponent },
//   { path: 'uploadK', canActivate: [AuthGuardService], component: ImageKComponent },
//   { path: 'uploadArchiveK', canActivate: [AuthGuardService], component: ImageKArchiveComponent },
//   { path: 'uploadL', canActivate: [AuthGuardService], component: ImageLComponent },
//   { path: 'uploadArchiveL', canActivate: [AuthGuardService], component: ImageLArchiveComponent },

//   { path: 'list', canActivate: [AuthGuardService], component: ImageListComponent },
//   { path: 'listB', canActivate: [AuthGuardService], component: ImageListBComponent },
//   { path: 'listC', canActivate: [AuthGuardService], component: ImageListCComponent },
//   { path: 'listD', canActivate: [AuthGuardService], component: ImageListDComponent },
//   { path: 'listE', canActivate: [AuthGuardService], component: ImageListEComponent },
//   { path: 'listF', canActivate: [AuthGuardService], component: ImageListFComponent },
//   { path: 'listG', canActivate: [AuthGuardService], component: ImageListGComponent },
//   { path: 'listH', canActivate: [AuthGuardService], component: ImageListHComponent },
//   { path: 'listI', canActivate: [AuthGuardService], component: ImageListIComponent },
//   { path: 'listJ', canActivate: [AuthGuardService], component: ImageListJComponent },
//   { path: 'listK', canActivate: [AuthGuardService], component: ImageListKComponent },
//   { path: 'listL', canActivate: [AuthGuardService], component: ImageListLComponent },

];

@NgModule({
    declarations: [
        Part01EditionHomeComponent,

        BookListComponent, // home

        ArchivesComponent,
        BackofficeComponent,

        ImagesComponent,

        ImageComponent,
        ImageArchiveComponent,
    // ImageBComponent,
    // ImageBArchiveComponent,
    // ImageCComponent,
    // ImageCArchiveComponent,
    // ImageDComponent,
    // ImageDArchiveComponent,
    // ImageEComponent,
    // ImageEArchiveComponent,
    // ImageFComponent,
    // ImageFArchiveComponent,
    // ImageGComponent,
    // ImageGArchiveComponent,
    // ImageHComponent,
    // ImageHArchiveComponent,
    // ImageIComponent,
    // ImageIArchiveComponent,
    // ImageJComponent,
    // ImageJArchiveComponent,
    // ImageKComponent,
    // ImageKArchiveComponent,
    // ImageLComponent,
    // ImageLArchiveComponent,

    // ImageListComponent,
    // ImageListBComponent,
    // ImageListCComponent,
    // ImageListDComponent,
    // ImageListEComponent,
    // ImageListFComponent,
    // ImageListGComponent,
    // ImageListHComponent,
    // ImageListIComponent,
    // ImageListJComponent,
    // ImageListKComponent,
    // ImageListLComponent,

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
        ReactiveFormsModule
      ],
    exports: [
      RouterModule
    ],
    providers: [
        AuthGuardService
    ]})

export class Part01EditionModule { }