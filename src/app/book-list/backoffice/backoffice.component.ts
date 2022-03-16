import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookG } from '../../models/bookG.model';
import { BooksService } from '../../services/books.service';
import { ImageService } from '../../services/image.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./../book-list.component.scss',
  './../normalize.component.scss']
})
export class BackofficeComponent implements OnInit {

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

  // imageListA: any[];
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

  // imageList: ImageList[];

  // // imageListA: any[];
  // imageListB: ImageListB[];
  // imageListC: ImageListC[];
  // imageListD: ImageListD[];
  // imageListE: ImageListE[];
  // imageListF: ImageListF[];
  // imageListG: ImageListG[];
  // imageListH: ImageListH[];
  // imageListI: ImageListI[];
  // imageListJ: ImageListJ[];
  // imageListK: ImageListK[];
  // imageListL: ImageListL[];
  // imageListAll: ImageListAll[];

  rowIndexArray: any[];

  buttonDisabled: boolean;

  constructor(
    private booksService: BooksService,
    private imageService: ImageService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.buttonDisabled = false;

    // ----

    this.imageService.getImageDetailList();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {return item.payload.val();});
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

    this.imageService.getImageDetailListAll();

    //@ts-ignore
    this.imageService.getImageDetailListAll.snapshotChanges().subscribe(
      (      list: any[]) => {
        this.imageListAll = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListAll.length +1) / 3)).keys());
      }
    );

    this.bookAllsSubscription = this.booksService.bookAllSubject.subscribe(
      (bookAlls: Book[]) => {
        this.bookAlls = bookAlls;
      }
    );
    this.booksService.getBookAlls();
    this.booksService.emitBookAlls();
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
              location.reload();
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

  // -----

  // onDestroy() {
  //   this.articleAsSubscription.unsubscribe();
  // }

  onRefresh() {
    window.location.reload();
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
