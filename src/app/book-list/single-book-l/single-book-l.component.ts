import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import '@angular/common/locales/global/fr';
// import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
// registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@Component({
  selector: 'app-single-book-l',
  templateUrl: './single-book-l.component.html',
  styleUrls: ['./../book-list.component.scss',
  './../normalize.component.scss']
})
export class SingleBookLComponent implements OnInit {

  bookL: Book;
  imageList: any[];
  rowIndexArray: [];

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private imageService: ImageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initGetSingleBookById();
    this.imageService.getImageDetailListL();

    this.imageService.imageDetailListL.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageList.length +1) / 3)).keys());
      }
    );
  }

  initGetSingleBookById() {
    this.bookL = new Book('', '', ''); // Book temporaire vide pour empêcher le plantage
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBookL(+id).then(
      (bookL: Book) => {
        this.bookL = bookL;
      }
    );
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
