import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import '@angular/common/locales/global/fr';

@Component({
  selector: 'app-single-book-c',
  templateUrl: './single-book-c.component.html',
  styleUrls: ['./../book-list.component.scss']
})
export class SingleBookCComponent implements OnInit {

  bookC: Book;
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
    this.imageService.getImageDetailListC();

    this.imageService.imageDetailListC.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageList.length +1) / 3)).keys());
      }
    );
  }

  initGetSingleBookById() {
    this.bookC = new Book('', '', '', 3);
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBookC(+id).then(
      (bookC: Book) => {
        this.bookC = bookC;
      }
    );
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
