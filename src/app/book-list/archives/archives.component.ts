import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./../book-list.component.scss']
})
export class ArchivesComponent implements OnInit {

  bookAlls: Book[];
  bookAllsSubscription: Subscription;

  imageListAll: any[];
  imageListEach: any[];

  rowIndexArray: any[];

  buttonDisabled: boolean;

  constructor(
    private booksService: BooksService,
    private imageService: ImageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buttonDisabled = false;

    // ----

    this.imageService.getImageDetailListAll();

    this.imageService.imageDetailListAll.snapshotChanges().subscribe(
      list => {
        this.imageListAll = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListAll.length +1) / 3)).keys());
      }
    );

    // ------

    // this.imageService.getImageDetailListEach();
    
    // this.imageService.imageDetailListEach.snapshotChanges().subscribe(
    //   list => {
    //     this.imageListEach = list.map(item => {return item.payload.val();});
    //     this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListEach.length +1) / 3)).keys());
    //   }
    // );

    // ------

    this.bookAllsSubscription = this.booksService.bookAllSubject.subscribe(
      (bookAlls: Book[]) => {
        this.bookAlls = bookAlls;
      }
    );
    this.booksService.getBookAlls();
    this.booksService.emitBookAlls();

    this.bookAllsSubscription = this.booksService.bookAllSubject.subscribe(
      (bookAlls: Book[]) => {
        this.bookAlls = bookAlls;
      }
    );
    this.booksService.getBookAlls();
    this.booksService.emitBookAlls();
  }

  onViewBookAll(id: number) {
    this.router.navigate(['/bookAlls', 'view', id]);
  }

  onBack() {
    this.router.navigate(['/backoffice']);
  }

  bookAllTitle(index, bookAll) {
    return bookAll.title;
  }

  onDestroyAll() {
    this.bookAllsSubscription.unsubscribe();
  }

}
