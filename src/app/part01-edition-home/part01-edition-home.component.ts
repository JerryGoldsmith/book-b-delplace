import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BookG } from '../models/bookG.model';
import { BooksService } from '../services/books.service';
import { ImageService } from '../services/image.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
// import * as firebase from 'firebase';
import "firebase/database";

@Component({
  selector: 'app-part01-edition-home',
  templateUrl: './part01-edition-home.component.html',
  // template: `<app-book-list></app-book-list>`,
  styleUrls: ['./part01-edition-home.component.scss',
  './book-list.component.scss',
  './header.component.scss']
})
export class Part01EditionHomeComponent implements OnInit {

  books: Book[];
  booksSubscription: Subscription;

  bookAs: Book[];
  bookAsSubscription: Subscription;

  bookBs: Book[];
  bookBsSubscription: Subscription;

  bookCs: Book[];
  bookCsSubscription: Subscription;

  bookDs: Book[];
  bookDsSubscription: Subscription;

  bookEs: Book[];
  bookEsSubscription: Subscription;

  bookFs: Book[];
  bookFsSubscription: Subscription;

  bookGs: BookG[];
  bookGsSubscription: Subscription;

  bookHs: Book[];
  bookHsSubscription: Subscription;

  bookIs: Book[];
  bookIsSubscription: Subscription;

  bookJs: Book[];
  bookJsSubscription: Subscription;

  bookKs: Book[];
  bookKsSubscription: Subscription;

  bookLs: Book[];
  bookLsSubscription: Subscription;

  bookAlls: Book[];
  bookAllsSubscription: Subscription;

  imageList: any[];

  imageListA: any[];
  imageListB: any[];
  imageListC: any[];
  imageListD: any[];
  imageListE: any[];
  imageListF: any[];
  imageListG: any[];
  imageListH: any[];
  imageListI: any[];
  imageListJ: any[];
  imageListK: any[];
  imageListL: any[];
  imageListAll: any[];

  rowIndexArray: [];

  buttonDisabled: boolean;

  constructor(
    private booksService: BooksService,
    private imageService: ImageService,
    private router: Router
  ) { }

  // private changeRoute(menuSelection) {
  //   this.router.navigate([menuSelection]);
  // }

  ngOnInit(): void {

    this.buttonDisabled = false;

    // ----

    this.imageService.getImageDetailList();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {return item.payload.val();});
        //@ts-ignore
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageList.length +1) / 3)).keys());
      }
    );

    this.booksSubscription = this.booksService.bookSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksService.getBooks();
    this.booksService.emitBooks();

    // a ------

    // this.imageService.getImageDetailListA();
    //
    // this.imageService.imageDetailListA.snapshotChanges().subscribe(
    //   list => {
    //     this.imageListA = list.map(item => {return item.payload.val();});
    //     this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListA.length +1) / 3)).keys());
    //   }
    // );
    //
    // this.bookAsSubscription = this.booksService.bookASubject.subscribe(
    //   (bookAs: Book[]) => {
    //     this.bookAs = bookAs;
    //   }
    // );
    // this.booksService.getBookAs();
    // this.booksService.emitBookAs();

    // b ------

    this.imageService.getImageDetailListB();

    this.imageService.imageDetailListB.snapshotChanges().subscribe(
      list => {
        this.imageListB = list.map(item => {return item.payload.val();});
        //@ts-ignore
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListB.length +1) / 3)).keys());
      }
    );

    this.bookBsSubscription = this.booksService.bookBSubject.subscribe(
      (bookBs: Book[]) => {
        this.bookBs = bookBs;
      }
    );
    this.booksService.getBookBs();
    this.booksService.emitBookBs();

    // c ----

    this.imageService.getImageDetailListC();

    this.imageService.imageDetailListC.snapshotChanges().subscribe(
      list => {
        this.imageListC = list.map(item => {return item.payload.val();});
        //@ts-ignore
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListC.length +1) / 3)).keys());
      }
    );

    this.bookCsSubscription = this.booksService.bookCSubject.subscribe(
      (bookCs: Book[]) => {
        this.bookCs = bookCs;
      }
    );
    this.booksService.getBookCs();
    this.booksService.emitBookCs();

    // d ----

    this.imageService.getImageDetailListD();

    this.imageService.imageDetailListD.snapshotChanges().subscribe(
      list => {
        this.imageListD = list.map(item => {return item.payload.val();});
        //@ts-ignore
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListD.length +1) / 3)).keys());
      }
    );

    this.bookDsSubscription = this.booksService.bookDSubject.subscribe(
      (bookDs: Book[]) => {
        this.bookDs = bookDs;
      }
    );
    this.booksService.getBookDs();
    this.booksService.emitBookDs();

    // e ----

    this.imageService.getImageDetailListE();

    this.imageService.imageDetailListE.snapshotChanges().subscribe(
      list => {
        this.imageListE = list.map(item => {return item.payload.val();});
        //@ts-ignore
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListE.length +1) / 3)).keys());
      }
    );

    this.bookEsSubscription = this.booksService.bookESubject.subscribe(
      (bookEs: Book[]) => {
        this.bookEs = bookEs;
      }
    );
    this.booksService.getBookEs();
    this.booksService.emitBookEs();

    // f ----

    this.imageService.getImageDetailListF();

    this.imageService.imageDetailListF.snapshotChanges().subscribe(
      list => {
        this.imageListF = list.map(item => {return item.payload.val();});
        //@ts-ignore
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListF.length +1) / 3)).keys());
      }
    );

    this.bookFsSubscription = this.booksService.bookFSubject.subscribe(
      (bookFs: Book[]) => {
        this.bookFs = bookFs;
      }
    );
    this.booksService.getBookFs();
    this.booksService.emitBookFs();

    // g ----

    this.imageService.getImageDetailListG();

    this.imageService.imageDetailListG.snapshotChanges().subscribe(
      list => {
        this.imageListG = list.map(item => {return item.payload.val();});
        //@ts-ignore
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

    // h ----

    this.imageService.getImageDetailListH();

    this.imageService.imageDetailListH.snapshotChanges().subscribe(
      list => {
        this.imageListH = list.map(item => {return item.payload.val();});
        //@ts-ignore
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListH.length +1) / 3)).keys());
      }
    );

    this.bookHsSubscription = this.booksService.bookHSubject.subscribe(
      (bookHs: Book[]) => {
        this.bookHs = bookHs;
      }
    );
    this.booksService.getBookHs();
    this.booksService.emitBookHs();

    // i ----

    this.imageService.getImageDetailListI();

    this.imageService.imageDetailListI.snapshotChanges().subscribe(
      list => {
        this.imageListI = list.map(item => {return item.payload.val();});
        //@ts-ignore
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListI.length +1) / 3)).keys());
      }
    );

    this.bookIsSubscription = this.booksService.bookISubject.subscribe(
      (bookIs: Book[]) => {
        this.bookIs = bookIs;
      }
    );
    this.booksService.getBookIs();
    this.booksService.emitBookIs();

    // j ----

    this.imageService.getImageDetailListJ();

    this.imageService.imageDetailListJ.snapshotChanges().subscribe(
      list => {
        this.imageListJ = list.map(item => {return item.payload.val();});
        //@ts-ignore
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListJ.length +1) / 3)).keys());
      }
    );

    this.bookJsSubscription = this.booksService.bookJSubject.subscribe(
      (bookJs: Book[]) => {
        this.bookJs = bookJs;
      }
    );
    this.booksService.getBookJs();
    this.booksService.emitBookJs();

    // k ----

    this.imageService.getImageDetailListK();

    this.imageService.imageDetailListK.snapshotChanges().subscribe(
      list => {
        this.imageListK = list.map(item => {return item.payload.val();});
        //@ts-ignore
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListK.length +1) / 3)).keys());
      }
    );

    this.bookKsSubscription = this.booksService.bookKSubject.subscribe(
      (bookKs: Book[]) => {
        this.bookKs = bookKs;
      }
    );
    this.booksService.getBookKs();
    this.booksService.emitBookKs();

    // l ----

    this.imageService.getImageDetailListL();

    this.imageService.imageDetailListL.snapshotChanges().subscribe(
      list => {
        this.imageListL = list.map(item => {return item.payload.val();});
        //@ts-ignore
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListL.length +1) / 3)).keys());
      }
    );

    this.bookLsSubscription = this.booksService.bookLSubject.subscribe(
      (bookLs: Book[]) => {
        this.bookLs = bookLs;
      }
    );
    this.booksService.getBookLs();
    this.booksService.emitBookLs();

    // all ----

    // this.imageService.getImageDetailListAll();
    //
    // this.imageService.getImageDetailListAll.snapshotChanges().subscribe(
    //   list => {
    //     this.imageListAll = list.map(item => {return item.payload.val();});
    //     this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListAll.length +1) / 3)).keys());
    //   }
    // );

    this.bookAllsSubscription = this.booksService.bookAllSubject.subscribe(
      (bookAlls: Book[]) => {
        this.bookAlls = bookAlls;
      }
    );
    this.booksService.getBookAlls();
    this.booksService.emitBookAlls();

    /* refresh page */

    if(!window.location.hash) {
      //@ts-ignore
      window.location = window.location + '#loaded';
      window.location.reload();
   }

  /**
  * demo.js
  * http://www.codrops.com
  *
  * Licensed under the MIT license.
  * http://www.opensource.org/licenses/mit-license.php
  *
  * Copyright 2019, Codrops
  * http://www.codrops.com
  */

   {
      // helper functions
      const MathUtils = {
          // map number x from range [a, b] to [c, d]
          //@ts-ignore
          map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c,
          // linear interpolation
          //@ts-ignore
          lerp: (a, b, n) => (1 - n) * a + n * b
      };

      // body element
      const body = document.body;

      // calculate the viewport size
      //@ts-ignore
      let winsize;
      const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
      calcWinsize();
      // and recalculate on resize
      window.addEventListener('resize', calcWinsize);

      // scroll position and update function
      //@ts-ignore
      let docScroll;
      const getPageYScroll = () => docScroll = window.pageYOffset || document.documentElement.scrollTop;
      window.addEventListener('scroll', getPageYScroll);

      // Item
      class Item {
          DOM: { el: any; };
          renderedStyles: {
              // here we define which property will change as we scroll the page and the items is inside the viewport
              // in this case we will be translating the image on the y-axis
              // we interpolate between the previous and current value to achieve a smooth effect
              innerTranslationY: {
                  // interpolated value
                  previous: number;
                  // current value
                  current: number;
                  // amount to interpolate
                  ease: number;
                  // the maximum value to translate the image is set in a CSS variable (--overflow)
                  maxValue: number;
                  // current value setter
                  // the value of the translation will be:
                  // when the item's top value (relative to the viewport) equals the window's height (items just came into the viewport) the translation = minimum value (- maximum value)
                  // when the item's top value (relative to the viewport) equals "-item's height" (item just exited the viewport) the translation = maximum value
                  setValue: () => number;
              };
          };
          props: any;
          observer: IntersectionObserver;
          //@ts-ignore
          isVisible: boolean;
          //@ts-ignore
          constructor(el) {
              // the .item element
              this.DOM = {el: el};
              // the inner image
              //@ts-ignore
              this.DOM.image = this.DOM.el.querySelector('.item__img');
              this.renderedStyles = {
                  // here we define which property will change as we scroll the page and the items is inside the viewport
                  // in this case we will be translating the image on the y-axis
                  // we interpolate between the previous and current value to achieve a smooth effect
                  innerTranslationY: {
                      // interpolated value
                      previous: 0,
                      // current value
                      current: 0,
                      // amount to interpolate
                      ease: 0.1,
                      // the maximum value to translate the image is set in a CSS variable (--overflow)
                      //@ts-ignore
                      maxValue: parseInt(getComputedStyle(this.DOM.image).getPropertyValue('--overflow'), 10),
                      // current value setter
                      // the value of the translation will be:
                      // when the item's top value (relative to the viewport) equals the window's height (items just came into the viewport) the translation = minimum value (- maximum value)
                      // when the item's top value (relative to the viewport) equals "-item's height" (item just exited the viewport) the translation = maximum value
                      setValue: () => {
                          const maxValue = this.renderedStyles.innerTranslationY.maxValue;
                          const minValue = -1 * maxValue;
                          //@ts-ignore
                          return Math.max(Math.min(MathUtils.map(this.props.top - docScroll, winsize.height, -1 * this.props.height, minValue, maxValue), maxValue), minValue)
                      }
                  }
              };
              // set the initial values
              this.update();
              // use the IntersectionObserver API to check when the element is inside the viewport
              // only then the element translation will be updated
              this.observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => this.isVisible = entry.intersectionRatio > 0);
              });
              this.observer.observe(this.DOM.el);
              // init/bind events
              this.initEvents();
          }
          update() {
              // gets the item's height and top (relative to the document)
              this.getSize();
              // sets the initial value (no interpolation)
              for (const key in this.renderedStyles ) {
                  //@ts-ignore
                  this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
              }
              // translate the image
              this.layout();
          }
          getSize() {
              const rect = this.DOM.el.getBoundingClientRect();
              this.props = {
                  // item's height
                  height: rect.height,
                  // offset top relative to the document
                  //@ts-ignore
                  top: docScroll + rect.top
              }
          }
          initEvents() {
              window.addEventListener('resize', () => this.resize());
          }
          resize() {
              // on resize rest sizes and update the translation value
              this.update();
          }
          render() {
              // update the current and interpolated values
              for (const key in this.renderedStyles ) {
                  //@ts-ignore
                  this.renderedStyles[key].current = this.renderedStyles[key].setValue();
                  //@ts-ignore
                  this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
              }
              // and translates the image
              this.layout();
          }
          layout() {
              // translates the image
              //@ts-ignore
              this.DOM.image.style.transform = `translate3d(0,${this.renderedStyles.innerTranslationY.previous}px,0)`;
          }
      }

      // SmoothScroll
      class SmoothScroll {
          DOM: { main: HTMLElement; };
          items: any[];
          renderedStyles: {
              translationY: {
                  // interpolated value
                  previous: number;
                  // current value
                  current: number;
                  // amount to interpolate
                  ease: number;
                  // current value setter
                  // in this case the value of the translation will be the same like the document scroll
                  setValue: () => any;
              };
          };
          constructor() {
              // the <main> element
              //@ts-ignore
              this.DOM = {main: document.querySelector('main')};
              // the scrollable element
              // we translate this element when scrolling (y-axis)
              //@ts-ignore
              this.DOM.scrollable = this.DOM.main.querySelector('div[data-scroll]');
              // the items on the page
              this.items = [];
              //@ts-ignore
              [...this.DOM.main.querySelectorAll('.content > .item')].forEach(item => this.items.push(new Item(item)));
              // here we define which property will change as we scroll the page
              // in this case we will be translating on the y-axis
              // we interpolate between the previous and current value to achieve the smooth scrolling effect
              this.renderedStyles = {
                  translationY: {
                      // interpolated value
                      previous: 0,
                      // current value
                      current: 0,
                      // amount to interpolate
                      ease: 0.1,
                      // current value setter
                      // in this case the value of the translation will be the same like the document scroll
                      //@ts-ignore
                      setValue: () => docScroll
                  }
              };
              // set the body's height
              this.setSize();
              // set the initial values
              this.update();
              // the <main> element's style needs to be modified
              this.style();
              // init/bind events
              this.initEvents();
              // start the render loop
              requestAnimationFrame(() => this.render());
          }
          update() {
              // sets the initial value (no interpolation) - translate the scroll value
              for (const key in this.renderedStyles ) {
                  //@ts-ignore
                  this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
              }
              // translate the scrollable element
              this.layout();
          }
          layout() {
              // translates the scrollable element
              //@ts-ignore
              this.DOM.scrollable.style.transform = `translate3d(0,${-1*this.renderedStyles.translationY.previous}px,0)`;
          }
          setSize() {
              // set the heigh of the body in order to keep the scrollbar on the page
              //@ts-ignore
              body.style.height = `${this.DOM.scrollable.scrollHeight}px`;
          }
          style() {
              // the <main> needs to "stick" to the screen and not scroll
              // for that we set it to position fixed and overflow hidden
              this.DOM.main.style.position = 'fixed';
              this.DOM.main.style.width = this.DOM.main.style.height = '100%';
              //@ts-ignore
              this.DOM.main.style.top = this.DOM.main.style.left = 0;
              this.DOM.main.style.overflow = 'hidden';
          }
          initEvents() {
              // on resize reset the body's height
              window.addEventListener('resize', () => this.setSize());
          }
          render() {
              // update the current and interpolated values
              for (const key in this.renderedStyles ) {
                  //@ts-ignore
                  this.renderedStyles[key].current = this.renderedStyles[key].setValue();
                  //@ts-ignore
                  this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
              }
              // and translate the scrollable element
              this.layout();

              // for every item
              for (const item of this.items) {
                  // if the item is inside the viewport call it's render function
                  // this will update the item's inner image translation, based on the document scroll value and the item's position on the viewport
                  if ( item.isVisible ) {
                      item.render();
                  }
              }

              // loop..
              requestAnimationFrame(() => this.render());
          }
      }

      /***********************************/
      /********** Preload stuff **********/

      // Preload images
      const preloadImages = () => {
          return new Promise((resolve, reject) => {
              //@ts-ignore
              imagesLoaded(document.querySelectorAll('.item__img'), {background: true}, resolve);
          });
      };

      // And then..
      preloadImages().then(() => {
          // Remove the loader
          document.body.classList.remove('loading');
          // Get the scroll position
          getPageYScroll();
          // Initialize the Smooth Scrolling
          new SmoothScroll();
      });
  }
  }

  // -----

  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }

  onNewBookA() {
    this.router.navigate(['/bookAs', 'new']);
  }

  onNewBookB() {
    this.router.navigate(['/bookBs', 'new']);
  }

  onNewBookC() {
    this.router.navigate(['/bookCs', 'new']);
  }

  onNewBookD() {
    this.router.navigate(['/bookDs', 'new']);
  }

  onNewBookE() {
    this.router.navigate(['/bookEs', 'new']);
  }

  onNewBookF() {
    this.router.navigate(['/bookFs', 'new']);
  }

  onNewBookG() {
    this.router.navigate(['/bookGs', 'new']);
  }

  onNewBookH() {
    this.router.navigate(['/bookHs', 'new']);
  }

  onNewBookI() {
    this.router.navigate(['/bookIs', 'new']);
  }

  onNewBookJ() {
    this.router.navigate(['/bookJs', 'new']);
  }

  onNewBookK() {
    this.router.navigate(['/bookKs', 'new']);
  }

  onNewBookL() {
    this.router.navigate(['/bookLs', 'new']);
  }

  onNewBookAll() {
    this.router.navigate(['/bookAlls', 'new']);
  }

  // -----

  onClearBooks() {
    this.booksService.clearBooks();
  }

  // ------

  onClearBookAs() {
    this.booksService.clearBookAs();
  }

  onClearBookBs() {
    this.booksService.clearBookBs();
  }

  onClearBookCs() {
    this.booksService.clearBookCs();
  }

  onClearBookDs() {
    this.booksService.clearBookDs();
  }

  onClearBookEs() {
    this.booksService.clearBookEs();
  }

  onClearBookFs() {
    this.booksService.clearBookFs();
  }

  onClearBookGs() {
    this.booksService.clearBookGs();
  }

  onClearBookHs() {
    this.booksService.clearBookHs();
  }

  onClearBookIs() {
    this.booksService.clearBookIs();
  }

  onClearBookJs() {
    this.booksService.clearBookJs();
  }

  onClearBookKs() {
    this.booksService.clearBookKs();
  }

  onClearBookLs() {
    this.booksService.clearBookLs();
  }

  // -----

  onClearImageDetails() {
    this.booksService.clearImageDetails();
  }

  // -------

  onClearImageDetailAs() {
    this.booksService.clearImageDetailAs();
  }

  onClearImageDetailBs() {
    this.booksService.clearImageDetailBs();
  }

  onClearImageDetailCs() {
    this.booksService.clearImageDetailCs();
  }

  onClearImageDetailDs() {
    this.booksService.clearImageDetailDs();
  }

  onClearImageDetailEs() {
    this.booksService.clearImageDetailEs();
  }

  onClearImageDetailFs() {
    this.booksService.clearImageDetailFs();
  }

  onClearImageDetailGs() {
    this.booksService.clearImageDetailGs();
  }

  onClearImageDetailHs() {
    this.booksService.clearImageDetailHs();
  }

  onClearImageDetailIs() {
    this.booksService.clearImageDetailIs();
  }

  onClearImageDetailJs() {
    this.booksService.clearImageDetailJs();
  }

  onClearImageDetailKs() {
    this.booksService.clearImageDetailKs();
  }

  onClearImageDetailLs() {
    this.booksService.clearImageDetailLs();
  }

  // -------

  onClearArticleAStorage() {
    this.booksService.clearArticleAStorage();
  }

  onClearArticleBStorage() {
    this.booksService.clearArticleBStorage();
  }

  onClearArticleCStorage() {
    this.booksService.clearArticleCStorage();
  }

  onClearArticleDStorage() {
    this.booksService.clearArticleDStorage();
  }

  onClearArticleEStorage() {
    this.booksService.clearArticleEStorage();
  }

  onClearArticleFStorage() {
    this.booksService.clearArticleFStorage();
  }

  onClearArticleGStorage() {
    this.booksService.clearArticleGStorage();
  }

  onClearArticleHStorage() {
    this.booksService.clearArticleHStorage();
  }

  onClearArticleIStorage() {
    this.booksService.clearArticleIStorage();
  }

  onClearArticleJStorage() {
    this.booksService.clearArticleJStorage();
  }

  onClearArticleKStorage() {
    this.booksService.clearArticleKStorage();
  }

  onClearArticleLStorage() {
    this.booksService.clearArticleLStorage();
  }

  // -----

  onRefreshButton() {
    var storage = window.sessionStorage;
      $(function(){
        $('section').show("slow");
        if(!storage.getItem("reloaded")) {
          setTimeout(function(){
            $('section').show("slow", function(){
              location.reload(true);
              storage.setItem("reloaded", "true");
            });
          }, 1000); // 5 seconds for demo
        }
      });
  }

  // -----

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }

  onViewBookA(id: number) {
    this.router.navigate(['/bookAs', 'view', id]);
  }

  onViewBookB(id: number) {
    this.router.navigate(['/bookBs', 'view', id]);
  }

  onViewBookC(id: number) {
    this.router.navigate(['/bookCs', 'view', id]);
  }

  onViewBookD(id: number) {
    this.router.navigate(['/bookDs', 'view', id]);
  }

  onViewBookE(id: number) {
    this.router.navigate(['/bookEs', 'view', id]);
  }

  onViewBookF(id: number) {
    this.router.navigate(['/bookFs', 'view', id]);
  }

  onViewBookG(id: number) {
    this.router.navigate(['/bookGs', 'view', id]);
  }

  onViewBookH(id: number) {
    this.router.navigate(['/bookHs', 'view', id]);
  }

  onViewBookI(id: number) {
    this.router.navigate(['/bookIs', 'view', id]);
  }

  onViewBookJ(id: number) {
    this.router.navigate(['/bookJs', 'view', id]);
  }

  onViewBookK(id: number) {
    this.router.navigate(['/bookKs', 'view', id]);
  }

  onViewBookL(id: number) {
    this.router.navigate(['/bookLs', 'view', id]);
  }

  onViewBookAll(id: number) {
    this.router.navigate(['/bookAlls', 'view', id]);
  }

  onViewBookAllOne(id: number) {
    this.router.navigate(['/bookAllOnes', 'view', id]);
  }

  onViewBookAllTwo(id: number) {
    this.router.navigate(['/bookAllTwos', 'view', id]);
  }

  onViewBookAllThree(id: number) {
    this.router.navigate(['/bookAllThrees', 'view', id]);
  }

  onViewBookAllFour(id: number) {
    this.router.navigate(['/bookAllFours', 'view', id]);
  }

  onViewBookAllFive(id: number) {
    this.router.navigate(['/bookAllFives', 'view', id]);
  }

  onViewBookAllSix(id: number) {
    this.router.navigate(['/bookAllSixs', 'view', id]);
  }

  // -----

  onDestroy() {
    this.booksSubscription.unsubscribe();
  }

  onDestroyA() {
    this.bookAsSubscription.unsubscribe();
  }

  onDestroyB() {
    this.bookBsSubscription.unsubscribe();
  }

  onDestroyC() {
    this.bookCsSubscription.unsubscribe();
  }

  onDestroyD() {
    this.bookDsSubscription.unsubscribe();
  }

  onDestroyE() {
    this.bookEsSubscription.unsubscribe();
  }

  onDestroyF() {
    this.bookFsSubscription.unsubscribe();
  }

  onDestroyG() {
    this.bookGsSubscription.unsubscribe();
  }

  onDestroyH() {
    this.bookHsSubscription.unsubscribe();
  }

  onDestroyI() {
    this.bookIsSubscription.unsubscribe();
  }

  onDestroyJ() {
    this.bookJsSubscription.unsubscribe();
  }

  onDestroyK() {
    this.bookKsSubscription.unsubscribe();
  }

  onDestroyL() {
    this.bookLsSubscription.unsubscribe();
  }

  // ----

  onRefresh() {
    window.location.reload();
  }

  onBack() {
    this.router.navigate(['/backoffice']);
  }

}
