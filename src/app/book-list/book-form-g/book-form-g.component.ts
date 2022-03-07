import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { Book } from '../../models/book.model';
import { BookG } from '../../models/bookG.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
// import firebase from "firebase/app";
import "firebase/database";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-book-form-g',
  templateUrl: './book-form-g.component.html',
  styleUrls: ['./../book-list.component.scss',
  './../normalize.component.scss']
})
export class BookFormGComponent implements OnInit {

  bookForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(
    private httpClient: HttpClient,
    private firestore: AngularFirestore,
    private formBuilder: FormBuilder,
    private booksService: BooksService,
    private imageService: ImageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.imageService.getImageDetailListG();
    // this.imageService.getImageDetailListAll();
  }

  initForm() {
    this.bookForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        texteA: ['', Validators.required],
        texteB: ['', Validators.required],
        texteC: ['', Validators.required],
        texteD: ['', Validators.required],
        texteE: ['', Validators.required],
        texteF: ['', Validators.required],
        texteG: ['', Validators.required],
        texteH: ['', Validators.required],
        texteI: ['', Validators.required],
        texteJ: ['', Validators.required],
        author: ['', Validators.required]
      }
    );
  }

  // ------

  onSaveBookG() {
    const title = this.bookForm.get('title').value;
    const texteA = this.bookForm.get('texteA').value;
    const texteB = this.bookForm.get('texteB').value;
    const texteC = this.bookForm.get('texteC').value;
    const texteD = this.bookForm.get('texteD').value;
    const texteE = this.bookForm.get('texteE').value;
    const texteF = this.bookForm.get('texteF').value;
    const texteG = this.bookForm.get('texteG').value;
    const texteH = this.bookForm.get('texteH').value;
    const texteI = this.bookForm.get('texteI').value;
    const texteJ = this.bookForm.get('texteJ').value;
    const author = this.bookForm.get('author').value;

    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var timestamp = now.getTime();

    const newBookG = new BookG(
      title,
      texteA,
      texteB,
      texteC,
      texteD,
      texteE,
      texteF,
      texteG,
      texteH,
      texteI,
      texteJ,
      author,
      timestamp);
    this.booksService.createNewBookG(newBookG);

    // const newBookAll = new Book(title, texte, author);
    // this.booksService.createNewBookAll(newBookAll);

    this.router.navigate(['/books']);
  }

  // ------

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.booksService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false; // déjà chargé donc false
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

}
