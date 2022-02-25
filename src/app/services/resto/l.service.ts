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

export class LService {

  // Pizza Regina

  // L ----

  priceLSubject = new Subject<any[]>();
  priceLs = [
    { isChecked: false, value: 0.50, label: "Sauce piquante" },
    { isChecked: false, value: 4.50, label: "Demie bouteille de vin Français" },
    { isChecked: false, value: 5.00, label: "Demie bouteille de vin Italien" }
  ];

  emitPriceLSubject() {
    this.priceLSubject.next(this.priceLs.slice());
  }

  savePriceLToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/priceL.json', this.priceLs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  savePriceLFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://portfolio-bd.firebaseio.com/priceL.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.priceLs = response;
        this.emitPriceLSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  savePriceL() {
    firebase.database().ref('/priceL').set(this.priceLs);
  }

  // itemPriceL ------

  //@ts-ignore
  itemPriceLSubject = new Subject<any[]>();
  itemPriceLs = [ { value: 10.70 } ];

  emitItemPriceLSubject() {
    this.itemPriceLSubject.next(this.itemPriceLs.slice());
  }

  saveItemPriceLToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/itemPriceL.json', this.itemPriceLs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveItemPriceLFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://portfolio-bd.firebaseio.com/itemPriceL.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.itemPriceLs = response;
        this.emitItemPriceLSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  // totalL ------

  //@ts-ignore
  totalLSubject = new Subject<any[]>();
  totalLs = [
    { name: 0 }
  ];

  emitTotalLSubject() {
    this.totalLSubject.next(this.totalLs.slice());
  }

  saveTotalLToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/totalL.json', this.totalLs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalL() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalL')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name: this.priceLs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalLs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // ------

  public saveTotalDeleteL() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalL')
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
      this.totalLs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // complete L --------

  //@ts-ignore
  totalCompleteLSubject = new Subject<any[]>();
  totalCompleteLs = [
    { name: 0 }
  ];

  emitTotalCompleteLSubject() {
    this.totalCompleteLSubject.next(this.totalCompleteLs.slice());
  }

  saveTotalCompleteLToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/totalCompleteL.json', this.totalCompleteLs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalCompleteL() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteL')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceLs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      + this.itemPriceLs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalCompleteLs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // -----

  public saveTotalCompleteDeleteL() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteL')
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
      this.totalCompleteLs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // tva L -----

  //@ts-ignore
  totalTvaLSubject = new Subject<any[]>();
  totalTvaLs = [
    { name: 0 }
  ];

  emitTotalTvaLSubject() {
    this.totalTvaLSubject.next(this.totalTvaLs.slice());
  }

  saveTotalTvaLToFirebaseinServer() {
    this.httpClient
    .put('https://portfolio-bd.firebaseio.com/totalTvaL.json', this.totalTvaLs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalTvaL() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    const TVA = 20.0;
    var postsRef = firebase.database().ref('/totalTvaL')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceLs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
      + this.itemPriceLs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalTvaLs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // ------

  public saveTotalTvaDeleteL() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalTvaL')
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
      this.totalTvaLs = newPost;
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
