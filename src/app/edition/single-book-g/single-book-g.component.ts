import { Component, OnInit } from '@angular/core';
import { BookG } from '../../models/bookG.model';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import '@angular/common/locales/global/fr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-book-g',
  templateUrl: './single-book-g.component.html',
  styleUrls: ['./../book-list.component.scss',
  '../../../assets/css/button-effects.css',
  '../../../assets/css/img-scroll.css']
})
export class SingleBookGComponent implements OnInit {

  bookGs: BookG[];
  bookGsSubscription: Subscription;

  bookG: BookG;
  imageListG: string[];
  rowIndexArray: number[];

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private imageService: ImageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initGetSingleBookById();
    this.imageService.getImageDetailListG();

    this.imageService.imageDetailListG.snapshotChanges().subscribe(
      list => {
        this.imageListG = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListG.length +1) / 3)).keys());
      }
    );

    this.bookGsSubscription = this.booksService.bookGSubject.subscribe(
      (bookGs: BookG[]) => {
        this.bookGs = bookGs;
      }
    );
    this.booksService.getBookGs();
    this.booksService.emitBookGs();

    // ---------

    function showImages(el: string) {
      var windowHeight = jQuery( window ).height();
      $(el).each(function(){
          var thisPos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (topOfWindow + windowHeight - 200 > thisPos ) {
              $(this).addClass("fadeIn");
          }
      });
    }

    $(function(){
        showImages('.starVisible');
    });

    $(window).on('scroll', function () {
        showImages('.star');
    });
  }

  initGetSingleBookById() {
    this.bookG = new BookG('', '', '', '', '', '', '', '', '', '', '', '', 3);
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBookG(+id).then(
      (bookG: BookG) => {
        this.bookG = bookG;
      }
    );
  }

  onBack() {
    this.router.navigate(['/backoffice']);
  }

}
