import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';
import "firebase/database";
// import { timestamp } from 'rxjs-compat/operator/timestamp';

@Component({
  selector: 'app-book-form-l',
  templateUrl: './book-form-l.component.html',
  styleUrls: ['./../book-list.component.scss']
})
export class BookFormLComponent implements OnInit {

  bookForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(
    private formBuilder: FormBuilder,
    private booksService: BooksService,
    private imageService: ImageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.imageService.getImageDetailListL();
    this.imageService.getImageDetailListAll();
  }

  initForm() {
    this.bookForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        texte: ['', Validators.required],
        author: ['', Validators.required]
      }
    );
  }

  // ------

  onSaveBookL() {
    const title = this.bookForm.get('title').value;
    const texte = this.bookForm.get('texte').value;
    const author = this.bookForm.get('author').value;
    // const timestamp = this.bookForm.get('timestamp').value;

    // var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var timestamp = now.getTime();

    const newBookL = new Book(title, texte, author, timestamp);
    this.booksService.createNewBookL(newBookL);

    const newBookAll = new Book(title, texte, author, timestamp);
    this.booksService.createNewBookAll(newBookAll);

    this.router.navigate(['/books']);
  }

}
