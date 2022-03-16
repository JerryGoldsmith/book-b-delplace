import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPreloadStrategy } from '../pre-loading/auth-preload-strategy';

import { Part01EditionHomeComponent } from './../part01-edition-home/part01-edition-home.component';
// import { BookListComponent } from 'src/app/book-list/book-list.component';
// import { SingleBookComponent } from 'src/app/book-list/single-book/single-book.component';
// import { BookFormComponent } from 'src/app/book-list/book-form/book-form.component';
// import { ArchivesComponent } from 'src/app/book-list/archives/archives.component';
// import { BackofficeComponent } from 'src/app/book-list/backoffice/backoffice.component';

// import { BookFormAComponent } from 'src/app/book-list/book-form-a/book-form-a.component';
// import { BookFormBComponent } from 'src/app/book-list/book-form-b/book-form-b.component';
// import { BookFormCComponent } from 'src/app/book-list/book-form-c/book-form-c.component';
// import { BookFormDComponent } from 'src/app/book-list/book-form-d/book-form-d.component';
// import { BookFormEComponent } from 'src/app/book-list/book-form-e/book-form-e.component';
// import { BookFormFComponent } from 'src/app/book-list/book-form-f/book-form-f.component';
// import { BookFormGComponent } from 'src/app/book-list/book-form-g/book-form-g.component';
// import { BookFormHComponent } from 'src/app/book-list/book-form-h/book-form-h.component';
// import { BookFormIComponent } from 'src/app/book-list/book-form-i/book-form-i.component';
// import { BookFormJComponent } from 'src/app/book-list/book-form-j/book-form-j.component';
// import { BookFormKComponent } from 'src/app/book-list/book-form-k/book-form-k.component';
// import { BookFormLComponent } from 'src/app/book-list/book-form-l/book-form-l.component';

// import { SingleBookAComponent } from 'src/app/book-list/single-book-a/single-book-a.component';
// import { SingleBookBComponent } from 'src/app/book-list/single-book-b/single-book-b.component';
// import { SingleBookCComponent } from 'src/app/book-list/single-book-c/single-book-c.component';
// import { SingleBookDComponent } from 'src/app/book-list/single-book-d/single-book-d.component';
// import { SingleBookEComponent } from 'src/app/book-list/single-book-e/single-book-e.component';
// import { SingleBookFComponent } from 'src/app/book-list/single-book-f/single-book-f.component';
// import { SingleBookGComponent } from 'src/app/book-list/single-book-g/single-book-g.component';
// import { SingleBookHComponent } from 'src/app/book-list/single-book-h/single-book-h.component';
// import { SingleBookIComponent } from 'src/app/book-list/single-book-i/single-book-i.component';
// import { SingleBookJComponent } from 'src/app/book-list/single-book-j/single-book-j.component';
// import { SingleBookKComponent } from 'src/app/book-list/single-book-k/single-book-k.component';
// import { SingleBookLComponent } from 'src/app/book-list/single-book-l/single-book-l.component';

// import { SingleBookAllComponent } from 'src/app/book-list/single-book-all/single-book-all.component';
// import { SingleBookAllOneComponent } from 'src/app/book-list/single-book-all-one/single-book-all-one.component';
// import { SingleBookAllTwoComponent } from 'src/app/book-list/single-book-all-two/single-book-all-two.component';
// import { SingleBookAllThreeComponent } from 'src/app/book-list/single-book-all-three/single-book-all-three.component';
// import { SingleBookAllFourComponent } from 'src/app/book-list/single-book-all-four/single-book-all-four.component';
// import { SingleBookAllFiveComponent } from 'src/app/book-list/single-book-all-five/single-book-all-five.component';
// import { SingleBookAllSixComponent } from 'src/app/book-list/single-book-all-six/single-book-all-six.component';

const routes: Routes = [
    { path: 'edition', component: Part01EditionHomeComponent }
];

@NgModule({
    declarations: [
        Part01EditionHomeComponent
      ],
    imports: [
        RouterModule.forRoot(routes,
          { preloadingStrategy: AuthPreloadStrategy })
      ],
    exports: [
      RouterModule
    ]})

export class Part01EditionModule { }