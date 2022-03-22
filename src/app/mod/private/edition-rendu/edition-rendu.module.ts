import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { Book } from 'src/app/models/book.model';
// import { BookG } from 'src/app/models/bookG.model';
// import { BooksService } from 'src/app/services/books.service';
// import { ImageService } from 'src/app/services/image.service';
// import { Subscription } from 'rxjs/Subscription';

import { EditionRenduRoutingModule } from './edition-rendu-routing.module';
import { BookListComponent } from 'src/app/edition/book-list.component';
// import { AEditionRoutingModule } from 'src/app/mod/private/a-edition/a-edition-routing.module';


@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    EditionRenduRoutingModule
  ],
  exports: [
    BookListComponent
  ]
})
export class EditionRenduModule { }
