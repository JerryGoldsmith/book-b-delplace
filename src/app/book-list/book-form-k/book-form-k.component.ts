import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';
// import firebase from 'firebase';
// import firebase from "firebase/app";
import "firebase/database";

@Component({
  selector: 'app-book-form-k',
  templateUrl: './book-form-k.component.html',
  styleUrls: ['./../book-list.component.scss',
  './../normalize.component.scss']
})
export class BookFormKComponent implements OnInit {

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
    this.imageService.getImageDetailListK();
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

  onSaveBookK() {
    const title = this.bookForm.get('title').value;
    const texte = this.bookForm.get('texte').value;
    const author = this.bookForm.get('author').value;

    // var dateTime = firebase.database.ServerValue.TIMESTAMP
    // let now: Date = new Date();
    // var timestamp = now.getTime();

    const newBookK = new Book(title, texte, author);
    this.booksService.createNewBookK(newBookK);

    const newBookAll = new Book(title, texte, author);
    this.booksService.createNewBookAll(newBookAll);

    this.router.navigate(['/books']);
  }

  // onSaveArticleA() {
  //   const title = this.bookForm.get('title').value;
  //   const texte = this.bookForm.get('texte').value;
  //   const author = this.bookForm.get('author').value;
  //   const newArticleA = new ArticleA(title, texte, author);
  //
  //   if(this.fileUrl && this.fileUrl != '') {
  //     newArticleA.photo = this.fileUrl;
  //   }
  //
  //   this.booksService.createNewArticleA(newArticleA);
  //   this.router.navigate(['/books']);
  // }

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
