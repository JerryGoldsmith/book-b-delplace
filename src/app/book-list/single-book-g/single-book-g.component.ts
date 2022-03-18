import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookG } from '../../models/bookG.model';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import '@angular/common/locales/global/fr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-book-g',
  templateUrl: './single-book-g.component.html',
  styleUrls: ['./../book-list.component.scss']
})
export class SingleBookGComponent implements OnInit {

  bookGs: BookG[];
  bookGsSubscription: Subscription;

  bookG: BookG;
  imageListG: any[];
  rowIndexArray: any[];

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private imageService: ImageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initGetSingleBookById();
    this.imageService.getImageDetailListG();

    this.imageService.imageDetailListG.snapshotChanges().subscribe(
      list => {
        this.imageListG = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListG.length +1) / 3)).keys());
      }
    );

    this.bookGsSubscription = this.booksService.bookGSubject.subscribe(
      (bookGs: BookG[]) => {
        this.bookGs = bookGs;
      }
    );
    this.booksService.getBookGs();
    this.booksService.emitBookGs();
  }

  initGetSingleBookById() {
    this.bookG = new BookG('', '', '', '', '', '', '', '', '', '', '', '', 3);
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBookG(+id).then(
      (bookG: BookG) => {
        this.bookG = bookG;
      }
    );
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
