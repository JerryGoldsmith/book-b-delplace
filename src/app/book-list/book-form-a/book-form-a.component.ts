import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form-a',
  templateUrl: './book-form-a.component.html',
  styleUrls: ['./../book-list.component.scss']
})
export class BookFormAComponent implements OnInit {

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
    this.imageService.getImageDetailListA();
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

  onSaveBookA() {
    const title = this.bookForm.get('title').value;
    const texte = this.bookForm.get('texte').value;
    const author = this.bookForm.get('author').value;
    const newBookA = new Book(title, texte, author);
    const newBookAllA = new Book(title, texte, author);
    // if(this.fileUrl && this.fileUrl !== '') {
    //   newBook.photo = this.fileUrl;
    // }

    this.booksService.createNewBookA(newBookA);
    this.booksService.createNewBookAllA(newBookAllA);
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

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    //@ts-ignore
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
