import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import '@angular/common/locales/global/fr';

@Component({
  selector: 'app-single-book-f',
  templateUrl: './single-book-f.component.html',
  styleUrls: ['./../book-list.component.scss',
  '../../../assets/css/button-effects.css']
})
export class SingleBookFComponent implements OnInit {

  bookF: Book;
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
    this.imageService.getImageDetailListF();

    this.imageService.imageDetailListF.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageList.length +1) / 3)).keys());
      }
    );
  }

  initGetSingleBookById() {
    this.bookF = new Book('', '', '', 3);
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBookF(+id).then(
      (bookF: Book) => {
        this.bookF = bookF;
      }
    );
  }

  onBack() {
    this.router.navigate(['/backoffice']);
  }

}
