import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
// import * as firebase from 'firebase/app';
// import firebase from "firebase/app";
import * as firebase from 'firebase/app';
import "firebase/database";
import { O2A } from 'object-to-array-convert';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})

export class GService {

  // Western BBQ Double

  // G ----

  priceGSubject = new Subject<any[]>();
  priceGs = [
    { isChecked: false, value: 0.50, label: "Sauce au choix : Barbecue" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Burger" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Algérienne" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Curry" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Ketchup" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Mayonnaise" },
    { isChecked: false, value: 4.50, label: "Bière Française" },
    { isChecked: false, value: 5.00, label: "Bière Américaine" }
  ];

  emitPriceGSubject() {
    this.priceGSubject.next(this.priceGs.slice());
  }

  savePriceGToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceG.json', this.priceGs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  savePriceGFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceG.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.priceGs = response;
        this.emitPriceGSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  savePriceG() {
    firebase.database().ref('/priceG').set(this.priceGs);
  }

  // itemPriceG --------

  itemPriceGSubject = new Subject<any[]>();
  itemPriceGs = [ { value: 15.95 } ];

  emitItemPriceGSubject() {
    this.itemPriceGSubject.next(this.itemPriceGs.slice());
  }

  saveItemPriceGToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceG.json', this.itemPriceGs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveItemPriceGFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceG.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.itemPriceGs = response;
        this.emitItemPriceGSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  // totalG ------

  totalGSubject = new Subject<any[]>();
  totalGs = [
    { name: 0 }
  ];

  emitTotalGSubject() {
    this.totalGSubject.next(this.totalGs.slice());
  }

  saveTotalGToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalG.json', this.totalGs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalG() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalG')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name: this.priceGs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalGs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // -----

  public saveTotalDeleteG() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalG')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name: 0
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalGs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // complete G --------

  totalCompleteGSubject = new Subject<any[]>();
  totalCompleteGs = [
    { name: 0 }
  ];

  emitTotalCompleteGSubject() {
    this.totalCompleteGSubject.next(this.totalCompleteGs.slice());
  }

  saveTotalCompleteGToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalCompleteG.json', this.totalCompleteGs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalCompleteG() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteG')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceGs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      + this.itemPriceGs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalCompleteGs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // ------

  public saveTotalCompleteDeleteG() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteG')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name: 0
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalCompleteGs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // tva G -------

  totalTvaGSubject = new Subject<any[]>();
  totalTvaGs = [
    { name: 0 }
  ];

  emitTotalTvaGSubject() {
    this.totalTvaGSubject.next(this.totalTvaGs.slice());
  }

  saveTotalTvaGToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalTvaG.json', this.totalTvaGs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalTvaG() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    const TVA = 20.0;
    var postsRef = firebase.database().ref('/totalTvaG')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceGs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
      + this.itemPriceGs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalTvaGs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // ------

  public saveTotalTvaDeleteG() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalTvaG')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name: 0
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalTvaGs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // ---------------------------------------------

  constructor(
    private httpClient: HttpClient,
    private firestore: AngularFirestore
  ) {}

}
