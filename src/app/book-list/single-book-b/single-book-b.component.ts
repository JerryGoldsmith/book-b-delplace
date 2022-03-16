import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import '@angular/common/locales/global/fr';

@Component({
  selector: 'app-single-book-b',
  templateUrl: './single-book-b.component.html',
  styleUrls: ['./../book-list.component.scss',
  './../normalize.component.scss']
})
export class SingleBookBComponent implements OnInit {

  bookB: Book;
  imageList: any[];
  rowIndexArray: any[];

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private imageService: ImageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initGetSingleBookById();
    this.imageService.getImageDetailListB();

    this.imageService.imageDetailListB.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageList.length +1) / 3)).keys());
      }
    );
  }

  initGetSingleBookById() {
    this.bookB = new Book('', '', '', new Date());
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBookB(+id).then(
      (bookB: Book) => {
        this.bookB = bookB;
      }
    );
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
