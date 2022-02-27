import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
// import * as firebase from 'firebase/app';
import firebase from "firebase/app";
import "firebase/database";
import { O2A } from 'object-to-array-convert';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})

export class FService {

  // Alpin

  // F ----

  priceFSubject = new Subject<any[]>();
  priceFs = [
    { isChecked: false, value: 0.50, label: "Sauce au choix : Barbecue" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Burger" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Algérienne" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Curry" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Ketchup" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Mayonnaise" },
    { isChecked: false, value: 4.50, label: "Bière Française" },
    { isChecked: false, value: 5.00, label: "Bière Américaine" }
  ];

  emitPriceFSubject() {
    this.priceFSubject.next(this.priceFs.slice());
  }

  savePriceFToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceF.json', this.priceFs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  savePriceFFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceF.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.priceFs = response;
        this.emitPriceFSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  savePriceF() {
    firebase.database().ref('/priceF').set(this.priceFs);
  }

  // itemPriceF -------

  itemPriceFSubject = new Subject<any[]>();
  itemPriceFs = [ { value: 9.50 } ];

  emitItemPriceFSubject() {
    this.itemPriceFSubject.next(this.itemPriceFs.slice());
  }

  saveItemPriceFToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceF.json', this.itemPriceFs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveItemPriceFFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceF.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.itemPriceFs = response;
        this.emitItemPriceFSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  // totalF ------

  totalFSubject = new Subject<any[]>();
  totalFs = [
    { name: 0 }
  ];

  emitTotalFSubject() {
    this.totalFSubject.next(this.totalFs.slice());
  }

  saveTotalFToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalF.json', this.totalFs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalF() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalF')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name: this.priceFs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalFs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // -----

  public saveTotalDeleteF() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalF')
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
      this.totalFs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // complete F --------

  totalCompleteFSubject = new Subject<any[]>();
  totalCompleteFs = [
    { name: 0 }
  ];

  emitTotalCompleteFSubject() {
    this.totalCompleteFSubject.next(this.totalCompleteFs.slice());
  }

  saveTotalCompleteFToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalCompleteF.json', this.totalCompleteFs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalCompleteF() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteF')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceFs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      + this.itemPriceFs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalCompleteFs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // ------

  public saveTotalCompleteDeleteF() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteF')
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
      this.totalCompleteFs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // tva F -------

  totalTvaFSubject = new Subject<any[]>();
  totalTvaFs = [
    { name: 0 }
  ];

  emitTotalTvaFSubject() {
    this.totalTvaFSubject.next(this.totalTvaFs.slice());
  }

  saveTotalTvaFToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalTvaF.json', this.totalTvaFs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalTvaF() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    const TVA = 20.0;
    var postsRef = firebase.database().ref('/totalTvaF')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceFs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
      + this.itemPriceFs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalTvaFs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // -----

  public saveTotalTvaDeleteF() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalTvaF')
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
      this.totalTvaFs = newPost;
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
