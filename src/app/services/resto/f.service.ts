import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase/app';
import "firebase/database";

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
        // console.log('Enregistrement terminé');
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
        // console.log('Chargement terminé');
        this.priceFs = response;
        this.emitPriceFSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
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
        // console.log('Enregistrement terminé');
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
        // console.log('Chargement terminé');
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
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalF() {
    let now: Date = new Date();
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

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // -----

  public saveTotalDeleteF() {
    let now: Date = new Date();
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

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
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
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalCompleteF() {
    let now: Date = new Date();
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

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // ------

  public saveTotalCompleteDeleteF() {
    let now: Date = new Date();
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

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
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
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalTvaF() {
    let now: Date = new Date();
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

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // -----

  public saveTotalTvaDeleteF() {
    let now: Date = new Date();
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

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // ---------------------------------------------

  constructor(
    private httpClient: HttpClient
  ) {}

}
