import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
// import * as firebase from 'firebase/app';
// import firebase from "firebase/app";
import * as firebase from 'firebase/app';
import "firebase/database";
// import O2A from 'object-to-array-convert';
// import * as O2A from 'object-to-array-convert';
// import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})

export class BService {

  // Yakitoris (brochettes)

  // B ----

  priceBSubject = new Subject<any[]>();
  priceBs = [
    { isChecked: false, value: 1.50, label: "Supplément 2 pièces" },
    { isChecked: false, value: 3.00, label: "Supplément 4 pièces" },
    { isChecked: false, value: 5.00, label: "Supplément 6 pièces" },
    { isChecked: false, value: 0.50, label: "Sauce Soja" },
    { isChecked: false, value: 4.00, label: "Bière Chinoise" },
    { isChecked: false, value: 3.50, label: "Bière Japonaise" },
    { isChecked: false, value: 4.50, label: "Bière Française" },
    { isChecked: false, value: 5.00, label: "Bière Américaine" }
  ];

  emitPriceBSubject() {
    this.priceBSubject.next(this.priceBs.slice());
  }

  savePriceBToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceB.json', this.priceBs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  savePriceBFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceB.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.priceBs = response;
        this.emitPriceBSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  savePriceB() {
    firebase.database().ref('/priceA').set(this.priceBs);
  }

  // itemPriceB ------

  itemPriceBSubject = new Subject<any[]>();
  itemPriceBs = [ { value: 11.50 } ];

  emitItemPriceBSubject() {
    this.itemPriceBSubject.next(this.itemPriceBs.slice());
  }

  saveItemPriceBToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceB.json', this.itemPriceBs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveItemPriceBFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceB.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.itemPriceBs = response;
        this.emitItemPriceBSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  // totalB ------

  totalBSubject = new Subject<any[]>(); // Yakitoris
  totalBs = [
    { name: 0 }
  ];

  emitTotalBSubject() {
    this.totalBSubject.next(this.totalBs.slice());
  }

  saveTotalBToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalB.json', this.totalBs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalB() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalB')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name: this.priceBs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalBs = newPost;
      console.log(newPost);
      return newPost + postId;
      // const value = O2A(snapshot);
      //   return value + postId;
    });
  }

  // ----

  public saveTotalDeleteB() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalB')
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
      this.totalBs = newPost;
      console.log(newPost);
      return newPost + postId;
      // const value = O2A(snapshot);
      //   return value + postId;
    });
  }

  // complete B --------

  totalCompleteBSubject = new Subject<any[]>();
  totalCompleteBs = [
    { name: 0 }
  ];

  emitTotalCompleteBSubject() {
    this.totalCompleteBSubject.next(this.totalCompleteBs.slice());
  }

  saveTotalCompleteBToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalCompleteB.json', this.totalCompleteBs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalCompleteB() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteB')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceBs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      + this.itemPriceBs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalCompleteBs = newPost;
      console.log(newPost);
      return newPost + postId;
      // const value = O2A(snapshot);
      //   return value + postId;
    });
  }

  // ----

  public saveTotalCompleteDeleteB() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteB')
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
      this.totalCompleteBs = newPost;
      console.log(newPost);
      return newPost + postId;
      // const value = O2A(snapshot);
      //   return value + postId;
    });
  }

  // tva C ----

  totalTvaBSubject = new Subject<any[]>();
  totalTvaBs = [
    { name: 0 }
  ];

  emitTotalTvaBSubject() {
    this.totalTvaBSubject.next(this.totalTvaBs.slice());
  }

  saveTotalTvaBToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalTvaB.json', this.totalTvaBs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalTvaB() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    const TVA = 20.0;
    var postsRef = firebase.database().ref('/totalTvaB')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceBs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
      + this.itemPriceBs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalTvaBs = newPost;
      console.log(newPost);
      return newPost + postId;
      // const value = O2A(snapshot);
      //   return value + postId;
    });
  }

  // -----

  public saveTotalTvaDeleteB() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalTvaB')
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
      this.totalTvaBs = newPost;
      console.log(newPost);
      return newPost + postId;
      // const value = O2A(snapshot);
      //   return value + postId;
    });
  }

  // ---------------------------------------------

  constructor(
    private httpClient: HttpClient
    // private firestore: AngularFirestore
  ) {}

}
