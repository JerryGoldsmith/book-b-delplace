import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
// import { ArticleA } from '../../models/articleA.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-a-form',
  templateUrl: './article-a-form.component.html',
  styleUrls: ['./article-a-form.component.scss',
  './../../normalize.component.scss']
})
export class ArticleAFormComponent implements OnInit {

  articleAForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(
    private formBuilder: FormBuilder,
    private booksService: BooksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.articleAForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        texte: ['', Validators.required],
        author: ['', Validators.required]
      }
    );
  }

  // ------

  onSaveArticleA() {
    const title = this.articleAForm.get('title').value;
    const texte = this.articleAForm.get('texte').value;
    const author = this.articleAForm.get('author').value;
    // const newArticleA = new ArticleA(title, texte, author);

    // if(this.fileUrl && this.fileUrl != '') {
    //   newArticleA.photo = this.fileUrl;
    // }

    // this.booksService.createNewArticleA(newArticleA);
    // this.router.navigate(['/books']);
  }

  // ------

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    // this.articleAsService.uploadFile(file).then(
    //   (url: string) => {
    //     this.fileUrl = url;
    //     this.fileIsUploading = false; // déjà chargé donc false
    //     this.fileUploaded = true;
    //   }
    // );
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

}
