import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import '@angular/common/locales/global/fr';

@Component({
  selector: 'app-single-book-h',
  templateUrl: './single-book-h.component.html',
  styleUrls: ['./../book-list.component.scss',
  '../../../assets/css/button-effects.css']
})
export class SingleBookHComponent implements OnInit {

  bookH: Book;
  imageList: string[];
  rowIndexArray: number[];

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private imageService: ImageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initGetSingleBookById();
    this.imageService.getImageDetailListH();

    this.imageService.imageDetailListH.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageList.length +1) / 3)).keys());
      }
    );
  }

  initGetSingleBookById() {
    this.bookH = new Book('', '', '', 3);
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBookH(+id).then(
      (bookH: Book) => {
        this.bookH = bookH;
      }
    );
  }

  onBack() {
    this.router.navigate(['/backoffice']);
  }

}
