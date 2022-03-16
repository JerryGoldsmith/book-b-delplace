import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import '@angular/common/locales/global/fr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-book-all-four',
  templateUrl: './single-book-all-four.component.html',
  styleUrls: ['./../book-list.component.scss',
  './../normalize.component.scss']
})
export class SingleBookAllFourComponent implements OnInit {

  bookAlls: Book[];
  bookAllsSubscription: Subscription;

  bookAll: Book;
  imageListAll: any[];
  rowIndexArray: any[];

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private imageService: ImageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initGetSingleBookById();

    // -----

    this.imageService.getImageDetailListAll();

    this.imageService.imageDetailListAll.snapshotChanges().subscribe(
      list => {
        this.imageListAll = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListAll.length +1) / 3)).keys());
      }
    );

    this.bookAllsSubscription = this.booksService.bookAllSubject.subscribe(
      (bookAlls: Book[]) => {
        this.bookAlls = bookAlls;
      }
    );
    this.booksService.getBookAlls();
    this.booksService.emitBookAlls();
  }

  initGetSingleBookById() {
    this.bookAll = new Book('', '', '');
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBookAll(+id).then(
      (bookAll: Book) => {
        this.bookAll = bookAll;
      }
    );
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
