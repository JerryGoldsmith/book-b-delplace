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

export class KService {

  // Pizza Chèvre & Miel

  // K ----

  priceKSubject = new Subject<any[]>();
  priceKs = [
    { isChecked: false, value: 0.50, label: "Sauce piquante" },
    { isChecked: false, value: 4.50, label: "Demie bouteille de vin Français" },
    { isChecked: false, value: 5.00, label: "Demie bouteille de vin Italien" }
  ];

  emitPriceKSubject() {
    this.priceKSubject.next(this.priceKs.slice());
  }

  savePriceKToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceK.json', this.priceKs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  savePriceKFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceK.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.priceKs = response;
        this.emitPriceKSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  savePriceK() {
    firebase.database().ref('/priceK').set(this.priceKs);
  }

  // itemPriceK --------

  itemPriceKSubject = new Subject<any[]>();
  itemPriceKs = [ { value: 14.00 } ];

  emitItemPriceKSubject() {
    this.itemPriceKSubject.next(this.itemPriceKs.slice());
  }

  saveItemPriceKToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceK.json', this.itemPriceKs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveItemPriceKFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceK.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.itemPriceKs = response;
        this.emitItemPriceKSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  // totalK ------

  totalKSubject = new Subject<any[]>();
  totalKs = [
    { name: 0 }
  ];

  emitTotalKSubject() {
    this.totalKSubject.next(this.totalKs.slice());
  }

  saveTotalKToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalK.json', this.totalKs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalK() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalK')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name: this.priceKs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalKs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // -------

  public saveTotalDeleteK() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalK')
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
      this.totalKs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // complete K --------

  totalCompleteKSubject = new Subject<any[]>();
  totalCompleteKs = [
    { name: 0 }
  ];

  emitTotalCompleteKSubject() {
    this.totalCompleteKSubject.next(this.totalCompleteKs.slice());
  }

  saveTotalCompleteKToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalCompleteK.json', this.totalCompleteKs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalCompleteK() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteK')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceKs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      + this.itemPriceKs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalCompleteKs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // ------

  public saveTotalCompleteDeleteK() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteK')
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
      this.totalCompleteKs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // tva K ------

  totalTvaKSubject = new Subject<any[]>();
  totalTvaKs = [
    { name: 0 }
  ];

  emitTotalTvaKSubject() {
    this.totalTvaKSubject.next(this.totalTvaKs.slice());
  }

  saveTotalTvaKToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalTvaK.json', this.totalTvaKs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalTvaK() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    const TVA = 20.0;
    var postsRef = firebase.database().ref('/totalTvaK')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceKs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
      + this.itemPriceKs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalTvaKs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // ------

  public saveTotalTvaDeleteK() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalTvaK')
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
      this.totalTvaKs = newPost;
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
