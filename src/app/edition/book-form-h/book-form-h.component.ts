import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';
import "firebase/database";

@Component({
  selector: 'app-book-form-h',
  templateUrl: './book-form-h.component.html',
  styleUrls: ['./../book-list.component.scss']
})
export class BookFormHComponent implements OnInit {

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
    this.imageService.getImageDetailListH();
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

  onSaveBookH() {
    const title = this.bookForm.get('title').value;
    const texte = this.bookForm.get('texte').value;
    const author = this.bookForm.get('author').value;

    let now: Date = new Date();
    var timestamp = now.getTime();

    const newBookH = new Book(title, texte, author, timestamp);
    this.booksService.createNewBookH(newBookH);

    // Pas de sauvegarde dans archives

    this.router.navigate(['/backoffice']);
  }

}
