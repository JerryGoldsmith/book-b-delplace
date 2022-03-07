import { Component, OnInit } from '@angular/core';
import { ArticleA } from '../../models/articleA.model';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-article-a',
  templateUrl: './single-article-a.component.html',
  styleUrls: ['./single-article-a.component.scss',
  './../normalize.component.scss']
})
export class SingleArticleAComponent implements OnInit {

  articleA: ArticleA;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initGetSingleArticleAById();
  }

  initGetSingleArticleAById() {
    this.articleA = new ArticleA('', ''); // Book temporaire vide pour empêcher le plantage
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleArticleA(+id).then(
      (articleA: ArticleA) => {
        this.articleA = articleA;
      }
    );
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
