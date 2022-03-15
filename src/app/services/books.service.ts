import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { BookG } from '../models/bookG.model';
import * as Subject from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase/app';
import "firebase/database";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = [];
  bookSubject = new Subject.Subject<Book[]>();

  bookAs: Book[] = [];
  bookASubject = new Subject.Subject<Book[]>();

  bookBs: Book[] = [];
  bookBSubject = new Subject.Subject<Book[]>();

  bookCs: Book[] = [];
  bookCSubject = new Subject.Subject<Book[]>();

  bookDs: Book[] = [];
  bookDSubject = new Subject.Subject<Book[]>();

  bookEs: Book[] = [];
  bookESubject = new Subject.Subject<Book[]>();

  bookFs: Book[] = [];
  bookFSubject = new Subject.Subject<Book[]>();

  // ----

  bookGs: BookG[] = [];
  bookGSubject = new Subject.Subject<BookG[]>();

  // -----

  bookHs: Book[] = [];
  bookHSubject = new Subject.Subject<Book[]>();

  bookIs: Book[] = [];
  bookISubject = new Subject.Subject<Book[]>();

  bookJs: Book[] = [];
  bookJSubject = new Subject.Subject<Book[]>();

  bookKs: Book[] = [];
  bookKSubject = new Subject.Subject<Book[]>();

  bookLs: Book[] = [];
  bookLSubject = new Subject.Subject<Book[]>();

  bookAlls: Book[] = [];
  bookAllSubject = new Subject.Subject<Book[]>();

  // articleAs: ArticleA[] = [];
  // articleASubject = new Subject<ArticleA[]>();

  constructor(
    private httpClient: HttpClient,
    private firestore: AngularFirestore
  ) { }

  emitBooks() {
    this.bookSubject.next(this.books);
  }

  // ----

  emitBookAs() {
    this.bookASubject.next(this.bookAs);
  }

  emitBookBs() {
    this.bookBSubject.next(this.bookBs);
  }

  emitBookCs() {
    this.bookCSubject.next(this.bookCs);
  }

  emitBookDs() {
    this.bookDSubject.next(this.bookDs);
  }

  emitBookEs() {
    this.bookESubject.next(this.bookEs);
  }

  emitBookFs() {
    this.bookFSubject.next(this.bookFs);
  }

  emitBookGs() {
    this.bookGSubject.next(this.bookGs);
  }

  emitBookHs() {
    this.bookHSubject.next(this.bookHs);
  }

  emitBookIs() {
    this.bookISubject.next(this.bookIs);
  }

  emitBookJs() {
    this.bookJSubject.next(this.bookJs);
  }

  emitBookKs() {
    this.bookKSubject.next(this.bookKs);
  }

  emitBookLs() {
    this.bookLSubject.next(this.bookLs);
  }

  emitBookAlls() {
    this.bookAllSubject.next(this.bookAlls);
  }

  // -----

  // emitArticleAs() {
  //   this.articleASubject.next(this.articleAs);
  // }

  // ------

  saveBooks() {
    firebase.database().ref('/books').set(this.books);
  }

  // -----

  saveBookAs() {
    firebase.database().ref('/bookAs').set(this.bookAs);
  }

  saveBookBs() {
    firebase.database().ref('/bookBs').set(this.bookBs);
  }

  saveBookCs() {
    firebase.database().ref('/bookCs').set(this.bookCs);
  }

  saveBookDs() {
    firebase.database().ref('/bookDs').set(this.bookDs);
  }

  saveBookEs() {
    firebase.database().ref('/bookEs').set(this.bookEs);
  }

  saveBookFs() {
    firebase.database().ref('/bookFs').set(this.bookFs);
  }

  saveBookGs() {
    firebase.database().ref('/bookGs').set(this.bookGs);
  }

  saveBookHs() {
    firebase.database().ref('/bookHs').set(this.bookHs);
  }

  saveBookIs() {
    firebase.database().ref('/bookIs').set(this.bookIs);
  }

  saveBookJs() {
    firebase.database().ref('/bookJs').set(this.bookJs);
  }

  saveBookKs() {
    firebase.database().ref('/bookKs').set(this.bookKs);
  }

  saveBookLs() {
    firebase.database().ref('/bookLs').set(this.bookLs);
  }

  saveBookAlls() {
    firebase.database().ref('/bookAlls').set(this.bookAlls);
  }

  // ------

  getBooks() {
    firebase.database().ref('/books')
    .on('value', (data) => {
      this.books = data.val() ? data.val() : [];
      this.emitBooks();
    });
  }

  // -----

  getBookAs() {
    firebase.database().ref('/bookAs')
    .on('value', (data) => {
      this.bookAs = data.val() ? data.val() : [];
      this.emitBookAs();
    });
  }

  getBookBs() {
    firebase.database().ref('/bookBs')
    .on('value', (data) => {
      this.bookBs = data.val() ? data.val() : [];
      this.emitBookBs();
    });
  }

  getBookCs() {
    firebase.database().ref('/bookCs')
    .on('value', (data) => {
      this.bookCs = data.val() ? data.val() : [];
      this.emitBookCs();
    });
  }

  getBookDs() {
    firebase.database().ref('/bookDs')
    .on('value', (data) => {
      this.bookDs = data.val() ? data.val() : [];
      this.emitBookDs();
    });
  }

  getBookEs() {
    firebase.database().ref('/bookEs')
    .on('value', (data) => {
      this.bookEs = data.val() ? data.val() : [];
      this.emitBookEs();
    });
  }

  getBookFs() {
    firebase.database().ref('/bookFs')
    .on('value', (data) => {
      this.bookFs = data.val() ? data.val() : [];
      this.emitBookFs();
    });
  }

  getBookGs() {
    firebase.database().ref('/bookGs')
    .on('value', (data) => {
      this.bookGs = data.val() ? data.val() : [];
      this.emitBookGs();
    });
  }

  getBookHs() {
    firebase.database().ref('/bookHs')
    .on('value', (data) => {
      this.bookHs = data.val() ? data.val() : [];
      this.emitBookHs();
    });
  }

  getBookIs() {
    firebase.database().ref('/bookIs')
    .on('value', (data) => {
      this.bookIs = data.val() ? data.val() : [];
      this.emitBookIs();
    });
  }

  getBookJs() {
    firebase.database().ref('/bookJs')
    .on('value', (data) => {
      this.bookJs = data.val() ? data.val() : [];
      this.emitBookJs();
    });
  }

  getBookKs() {
    firebase.database().ref('/bookKs')
    .on('value', (data) => {
      this.bookKs = data.val() ? data.val() : [];
      this.emitBookKs();
    });
  }

  getBookLs() {
    firebase.database().ref('/bookLs')
    .on('value', (data) => {
      this.bookLs = data.val() ? data.val() : [];
      this.emitBookLs();
    });
  }

  getBookAlls() {
    firebase.database().ref('/bookAlls')
    .on('value', (data) => {
      this.bookAlls = data.val() ? data.val() : [];
      this.emitBookAlls();
    });
  }

  // -----

  getSingleBook(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // ------

  getSingleBookA(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bookAs/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getSingleBookB(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bookBs/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getSingleBookC(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bookCs/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getSingleBookD(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bookDs/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getSingleBookE(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bookEs/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getSingleBookF(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bookFs/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getSingleBookG(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bookGs/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getSingleBookH(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bookHs/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getSingleBookI(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bookIs/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getSingleBookJ(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bookJs/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getSingleBookK(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bookKs/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getSingleBookL(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bookLs/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getSingleBookAll(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bookAlls/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // -----

  getSingleImageDetailAll(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/imageDetailAlls/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // -------

  createNewBook(newBook: Book) {
    this.books.push(newBook);
    this.saveBooks();
    this.emitBooks();
  }

  // ------

  createNewBookA(newBookA: Book) {
    this.bookAs.push(newBookA);
    this.saveBookAs();
    this.emitBookAs();
  }

  // ----

  createNewBookB(newBookB: Book) {
    this.bookBs.push(newBookB);
    this.saveBookBs();
    this.emitBookBs();
  }

  createNewBookC(newBookC: Book) {
    this.bookCs.push(newBookC);
    this.saveBookCs();
    this.emitBookCs();
  }

  createNewBookD(newBookD: Book) {
    this.bookDs.push(newBookD);
    this.saveBookDs();
    this.emitBookDs();
  }

  createNewBookE(newBookE: Book) {
    this.bookEs.push(newBookE);
    this.saveBookEs();
    this.emitBookEs();
  }

  createNewBookF(newBookF: Book) {
    this.bookFs.push(newBookF);
    this.saveBookFs();
    this.emitBookFs();
  }

  createNewBookG(newBookG: BookG) {
    this.bookGs.push(newBookG);
    this.saveBookGs();
    this.emitBookGs();
  }

  createNewBookH(newBookH: Book) {
    this.bookHs.push(newBookH);
    this.saveBookHs();
    this.emitBookHs();
  }

  createNewBookI(newBookI: Book) {
    this.bookIs.push(newBookI);
    this.saveBookIs();
    this.emitBookIs();
  }

  createNewBookJ(newBookJ: Book) {
    this.bookJs.push(newBookJ);
    this.saveBookJs();
    this.emitBookJs();
  }

  createNewBookK(newBookK: Book) {
    this.bookKs.push(newBookK);
    this.saveBookKs();
    this.emitBookKs();
  }

  createNewBookL(newBookL: Book) {
    this.bookLs.push(newBookL);
    this.saveBookLs();
    this.emitBookLs();
  }

  createNewBookAll(newBookAll: Book): void {
    this.bookAlls.push(newBookAll);
    this.saveBookAlls();
    this.emitBookAlls();
  }

  // -------

  clearBooks(){
    var updates = {};
    updates['/books'] = {};
    firebase.database().ref()
    .update(updates);
    alert('Cet article a été supprimé');
  }

  // -----

  clearBookAs(){
    var updates = {};
    updates['/bookAs'] = {};
    firebase.database().ref()
    .update(updates);
    alert('Cet article a été supprimé');
  }

  clearBookBs(){
    var updates = {};
    updates['/bookBs'] = {};
    firebase.database().ref()
    .update(updates);
    alert('Cet article a été supprimé');
  }

  clearBookCs(){
    var updates = {};
    updates['/bookCs'] = {};
    firebase.database().ref()
    .update(updates);
    alert('Cet article a été supprimé');
  }

  clearBookDs(){
    var updates = {};
    updates['/bookDs'] = {};
    firebase.database().ref()
    .update(updates);
    alert('Cet article a été supprimé');
  }

  clearBookEs(){
    var updates = {};
    updates['/bookEs'] = {};
    firebase.database().ref()
    .update(updates);
    alert('Cet article a été supprimé');
  }

  clearBookFs(){
    var updates = {};
    updates['/bookFs'] = {};
    firebase.database().ref()
    .update(updates);
    alert('Cet article a été supprimé');
  }

  clearBookGs(){
    var updates = {};
    updates['/bookGs'] = {};
    firebase.database().ref()
    .update(updates);
    alert('Cet article a été supprimé');
  }

  clearBookHs(){
    var updates = {};
    updates['/bookHs'] = {};
    firebase.database().ref()
    .update(updates);
    alert('Cet article a été supprimé');
  }

  clearBookIs(){
    var updates = {};
    updates['/bookIs'] = {};
    firebase.database().ref()
    .update(updates);
    alert('Cet article a été supprimé');
  }

  clearBookJs(){
    var updates = {};
    updates['/bookJs'] = {};
    firebase.database().ref()
    .update(updates);
    alert('Cet article a été supprimé');
  }

  clearBookKs(){
    var updates = {};
    updates['/bookKs'] = {};
    firebase.database().ref()
    .update(updates);
    alert('Cet article a été supprimé');
  }

  clearBookLs(){
    var updates = {};
    updates['/bookLs'] = {};
    firebase.database().ref()
    .update(updates);
    alert('Cet article a été supprimé');
  }

  // ------

  clearImageDetails(){
    var updates = {};
    updates['/imageDetails'] = {};
    firebase.database().ref()
    .update(updates);
    // alert('Cet article a été supprimé');
  }

  // -----

  clearImageDetailAs(){
    var updates = {};
    updates['/imageDetailAs'] = {};
    firebase.database().ref()
    .update(updates);
  }

  clearImageDetailBs(){
    var updates = {};
    updates['/imageDetailBs'] = {};
    firebase.database().ref()
    .update(updates);
  }

  clearImageDetailCs(){
    var updates = {};
    updates['/imageDetailCs'] = {};
    firebase.database().ref()
    .update(updates);
  }

  clearImageDetailDs(){
    var updates = {};
    updates['/imageDetailDs'] = {};
    firebase.database().ref()
    .update(updates);
  }

  clearImageDetailEs(){
    var updates = {};
    updates['/imageDetailEs'] = {};
    firebase.database().ref()
    .update(updates);
  }

  clearImageDetailFs(){
    var updates = {};
    updates['/imageDetailFs'] = {};
    firebase.database().ref()
    .update(updates);
  }

  clearImageDetailGs(){
    var updates = {};
    updates['/imageDetailGs'] = {};
    firebase.database().ref()
    .update(updates);
  }

  clearImageDetailHs(){
    var updates = {};
    updates['/imageDetailHs'] = {};
    firebase.database().ref()
    .update(updates);
  }

  clearImageDetailIs(){
    var updates = {};
    updates['/imageDetailIs'] = {};
    firebase.database().ref()
    .update(updates);
  }

  clearImageDetailJs(){
    var updates = {};
    updates['/imageDetailJs'] = {};
    firebase.database().ref()
    .update(updates);
  }

  clearImageDetailKs(){
    var updates = {};
    updates['/imageDetailKs'] = {};
    firebase.database().ref()
    .update(updates);
  }

  clearImageDetailLs(){
    var updates = {};
    updates['/imageDetailLs'] = {};
    firebase.database().ref()
    .update(updates);
  }

  // -----

  clearArticleAStorage(){
    var storageRef = firebase.storage().ref();
    var articlesRef = storageRef.child("/articleA");

    articlesRef.listAll().then(function (result) {
        result.items.forEach(function (file) {
           file.delete();
        });
    }).catch(function (error) {
        console.log("Fichier non trouvé : " + error);
    });
  }

  clearArticleBStorage(){
    var storageRef = firebase.storage().ref();
    var articlesRef = storageRef.child("/articleB");

    articlesRef.listAll().then(function (result) {
        result.items.forEach(function (file) {
           file.delete();
        });
    }).catch(function (error) {
        console.log("Fichier non trouvé : " + error);
    });
  }

  clearArticleCStorage(){
    var storageRef = firebase.storage().ref();
    var articlesRef = storageRef.child("/articleC");

    articlesRef.listAll().then(function (result) {
        result.items.forEach(function (file) {
           file.delete();
        });
    }).catch(function (error) {
        console.log("Fichier non trouvé : " + error);
    });
  }

  clearArticleDStorage(){
    var storageRef = firebase.storage().ref();
    var articlesRef = storageRef.child("/articleD");

    articlesRef.listAll().then(function (result) {
        result.items.forEach(function (file) {
           file.delete();
        });
    }).catch(function (error) {
        console.log("Fichier non trouvé : " + error);
    });
  }

  clearArticleEStorage(){
    var storageRef = firebase.storage().ref();
    var articlesRef = storageRef.child("/articleE");

    articlesRef.listAll().then(function (result) {
        result.items.forEach(function (file) {
           file.delete();
        });
    }).catch(function (error) {
        console.log("Fichier non trouvé : " + error);
    });
  }

  clearArticleFStorage(){
    var storageRef = firebase.storage().ref();
    var articlesRef = storageRef.child("/articleF");

    articlesRef.listAll().then(function (result) {
        result.items.forEach(function (file) {
           file.delete();
        });
    }).catch(function (error) {
        console.log("Fichier non trouvé : " + error);
    });
  }

  clearArticleGStorage(){
    var storageRef = firebase.storage().ref();
    var articlesRef = storageRef.child("/articleG");

    articlesRef.listAll().then(function (result) {
        result.items.forEach(function (file) {
           file.delete();
        });
    }).catch(function (error) {
        console.log("Fichier non trouvé : " + error);
    });
  }

  clearArticleHStorage(){
    var storageRef = firebase.storage().ref();
    var articlesRef = storageRef.child("/articleH");

    articlesRef.listAll().then(function (result) {
        result.items.forEach(function (file) {
           file.delete();
        });
    }).catch(function (error) {
        console.log("Fichier non trouvé : " + error);
    });
  }

  clearArticleIStorage(){
    var storageRef = firebase.storage().ref();
    var articlesRef = storageRef.child("/articleI");

    articlesRef.listAll().then(function (result) {
        result.items.forEach(function (file) {
           file.delete();
        });
    }).catch(function (error) {
        console.log("Fichier non trouvé : " + error);
    });
  }

  clearArticleJStorage(){
    var storageRef = firebase.storage().ref();
    var articlesRef = storageRef.child("/articleJ");

    articlesRef.listAll().then(function (result) {
        result.items.forEach(function (file) {
           file.delete();
        });
    }).catch(function (error) {
        console.log("Fichier non trouvé : " + error);
    });
  }

  clearArticleKStorage(){
    var storageRef = firebase.storage().ref();
    var articlesRef = storageRef.child("/articleK");

    articlesRef.listAll().then(function (result) {
        result.items.forEach(function (file) {
           file.delete();
        });
    }).catch(function (error) {
        console.log("Fichier non trouvé : " + error);
    });
  }

  clearArticleLStorage(){
    var storageRef = firebase.storage().ref();
    var articlesRef = storageRef.child("/articleL");

    articlesRef.listAll().then(function (result) {
        result.items.forEach(function (file) {
           file.delete();
        });
    }).catch(function (error) {
        console.log("Fichier non trouvé : " + error);
    });
  }

}
