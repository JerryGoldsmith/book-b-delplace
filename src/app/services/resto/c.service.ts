import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
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

export class CService {

  // Gyoza Poulet

  // C ----

  priceCSubject = new Subject<any[]>();
  priceCs = [
    { isChecked: false, value: 0.50, label: "Sauce Soja" },
    { isChecked: false, value: 4.00, label: "Bière Chinoise" },
    { isChecked: false, value: 3.50, label: "Bière Japonaise" },
    { isChecked: false, value: 4.50, label: "Bière Française" },
    { isChecked: false, value: 5.00, label: "Bière Américaine" }
  ];

  emitPriceCSubject() {
    this.priceCSubject.next(this.priceCs.slice());
  }

  savePriceCToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/priceC.json', this.priceCs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  savePriceCFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://portfolio-bd.firebaseio.com/priceC.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.priceCs = response;
        this.emitPriceCSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  savePriceC() {
    firebase.database().ref('/priceC').set(this.priceCs);
  }

  // itemPriceC ---------

  itemPriceCSubject = new Subject<any[]>();
  itemPriceCs = [ { value: 7.50 } ];

  emitItemPriceCSubject() {
    this.itemPriceCSubject.next(this.itemPriceCs.slice());
  }

  saveItemPriceCToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/itemPriceC.json', this.itemPriceCs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveItemPriceCFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://portfolio-bd.firebaseio.com/itemPriceC.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.itemPriceCs = response;
        this.emitItemPriceCSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  // totalC ------

  totalCSubject = new Subject<any[]>();
  totalCs = [
    { name: 0 }
  ];

  emitTotalCSubject() {
    this.totalCSubject.next(this.totalCs.slice());
  }

  saveTotalCToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/totalC.json', this.totalCs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalC() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalC')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name: this.priceCs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalCs = newPost;
      const value = O2A(snapshot);
        return value + postId;
    });
  }

  // -----

  public saveTotalDeleteC() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalC')
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
      this.totalCs = newPost;
      const value = O2A(snapshot);
        return value + postId;
    });
  }

  // complete C --------

  totalCompleteCSubject = new Subject<any[]>();
  totalCompleteCs = [
    { name: 0 }
  ];

  emitTotalCompleteCSubject() {
    this.totalCompleteCSubject.next(this.totalCompleteCs.slice());
  }

  saveTotalCompleteCToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/totalCompleteC.json', this.totalCompleteCs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalCompleteC() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteC')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceCs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      + this.itemPriceCs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalCompleteCs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // -----

  public saveTotalCompleteDeleteC() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteC')
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
      this.totalCompleteCs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // tva C -----

  totalTvaCSubject = new Subject<any[]>();
  totalTvaCs = [
    { name: 0 }
  ];

  emitTotalTvaCSubject() {
    this.totalTvaCSubject.next(this.totalTvaCs.slice());
  }

  saveTotalTvaCToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/totalTvaC.json', this.totalTvaCs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalTvaC() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    const TVA = 20.0;
    var postsRef = firebase.database().ref('/totalTvaC')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceCs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
      + this.itemPriceCs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalTvaCs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // ----

  public saveTotalTvaDeleteC() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalTvaC')
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
      this.totalTvaCs = newPost;
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