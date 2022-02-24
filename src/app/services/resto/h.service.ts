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

export class HService {

  // Supplément Frites M

  // H ----

  priceHSubject = new Subject<any[]>();
  priceHs = [
    { isChecked: false, value: 0.50, label: "Sauce au choix : Barbecue" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Burger" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Algérienne" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Curry" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Ketchup" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Mayonnaise" },
    { isChecked: false, value: 4.50, label: "Bière Française" },
    { isChecked: false, value: 5.00, label: "Bière Américaine" }
  ];

  emitPriceHSubject() {
    this.priceHSubject.next(this.priceHs.slice());
  }

  savePriceHToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/priceH.json', this.priceHs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  savePriceHFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://portfolio-bd.firebaseio.com/priceH.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.priceHs = response;
        this.emitPriceHSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  savePriceH() {
    firebase.database().ref('/priceH').set(this.priceHs);
  }

  // itemPriceH -------

  itemPriceHSubject = new Subject<any[]>();
  itemPriceHs = [ { value: 3.50 } ];

  emitItemPriceHSubject() {
    this.itemPriceHSubject.next(this.itemPriceHs.slice());
  }

  saveItemPriceHToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/itemPriceH.json', this.itemPriceHs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveItemPriceHFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://portfolio-bd.firebaseio.com/itemPriceH.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.itemPriceHs = response;
        this.emitItemPriceHSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  // totalH ------

  totalHSubject = new Subject<any[]>();
  totalHs = [
    { name: 0 }
  ];

  emitTotalHSubject() {
    this.totalHSubject.next(this.totalHs.slice());
  }

  saveTotalHToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/totalH.json', this.totalHs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalH() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalH')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name: this.priceHs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalHs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // -----

  public saveTotalDeleteH() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalH')
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
      this.totalHs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // complete H --------

  totalCompleteHSubject = new Subject<any[]>();
  totalCompleteHs = [
    { name: 0 }
  ];

  emitTotalCompleteHSubject() {
    this.totalCompleteHSubject.next(this.totalCompleteHs.slice());
  }

  saveTotalCompleteHToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/totalCompleteH.json', this.totalCompleteHs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalCompleteH() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteH')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceHs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      + this.itemPriceHs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalCompleteHs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // -----

  public saveTotalCompleteDeleteH() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteH')
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
      this.totalCompleteHs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // tva H ------

  totalTvaHSubject = new Subject<any[]>();
  totalTvaHs = [
    { name: 0 }
  ];

  emitTotalTvaHSubject() {
    this.totalTvaHSubject.next(this.totalTvaHs.slice());
  }

  saveTotalTvaHToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/totalTvaH.json', this.totalTvaHs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalTvaH() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    const TVA = 20.0;
    var postsRef = firebase.database().ref('/totalTvaH')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceHs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
      + this.itemPriceHs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalTvaHs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // -----

  public saveTotalTvaDeleteH() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalTvaH')
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
      this.totalTvaHs = newPost;
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