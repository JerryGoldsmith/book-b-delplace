import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';
// import firebase from 'firebase';
import "firebase/database";
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-book-form-b',
  templateUrl: './book-form-b.component.html',
  styleUrls: ['./../book-list.component.scss']
})
export class BookFormBComponent implements OnInit {

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
    this.imageService.getImageDetailListB();
    this.imageService.getImageDetailListAll();
  }

  initForm() {
    this.bookForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        texte: ['', Validators.required],
        author: ['', Validators.required],
        timestamp: ['', Validators.required]
      }
    );
  }

  // ------

  onSaveBookB() {
    const title = this.bookForm.get('title').value;
    const texte = this.bookForm.get('texte').value;
    const author = this.bookForm.get('author').value;
    const timestamp = this.bookForm.get('timestamp').value;

    // var dateTime = firebase.database.ServerValue.TIMESTAMP
    // let now: Date = new Date();
    // var timestamp = now.getTime();

    const newBookB = new Book(title, texte, author, timestamp);
    this.booksService.createNewBookB(newBookB);

    const newBookAll = new Book(title, texte, author, timestamp);
    this.booksService.createNewBookAll(newBookAll);

    this.router.navigate(['/books']);
  }

  // ------

  // onUploadFile(file: File) {
  //   this.fileIsUploading = true;
  //   this.booksService.uploadFile(file).then(
  //     (url: string) => {
  //       this.fileUrl = url;
  //       this.fileIsUploading = false; // déjà chargé donc false
  //       this.fileUploaded = true;
  //     }
  //   );
  // }

  // detectFiles(event) {
  //   this.onUploadFile(event.target.files[0]);
  // }

}
