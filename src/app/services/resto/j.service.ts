import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase/app';
import "firebase/database";

@Injectable({
  providedIn: "root"
})

export class JService {

  // Pizza Spéciale

  // J ----

  priceJSubject = new Subject<any[]>();
  priceJs = [
    { isChecked: false, value: 0.50, label: "Sauce piquante" },
    { isChecked: false, value: 4.50, label: "Demie bouteille de vin Français" },
    { isChecked: false, value: 5.00, label: "Demie bouteille de vin Italien" }
  ];

  emitPriceJSubject() {
    this.priceJSubject.next(this.priceJs.slice());
  }

  savePriceJToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceJ.json', this.priceJs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  savePriceJFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceJ.json')
    .subscribe(
      (response) => {
        // console.log('Chargement terminé');
        this.priceJs = response;
        this.emitPriceJSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  // itemPriceJ ------

  itemPriceJSubject = new Subject<any[]>();
  itemPriceJs = [ { value: 11.30 } ];

  emitItemPriceJSubject() {
    this.itemPriceJSubject.next(this.itemPriceJs.slice());
  }

  saveItemPriceJToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceJ.json', this.itemPriceJs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveItemPriceJFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceJ.json')
    .subscribe(
      (response) => {
        // console.log('Chargement terminé');
        this.itemPriceJs = response;
        this.emitItemPriceJSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  // totalJ ------

  totalJSubject = new Subject<any[]>();
  totalJs = [
    { name: 0 }
  ];

  emitTotalJSubject() {
    this.totalJSubject.next(this.totalJs.slice());
  }

  saveTotalJToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalJ.json', this.totalJs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalJ() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalJ')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name: this.priceJs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalJs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // -----

  public saveTotalDeleteJ() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalJ')
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
      this.totalJs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // complete J --------

  totalCompleteJSubject = new Subject<any[]>();
  totalCompleteJs = [
    { name: 0 }
  ];

  emitTotalCompleteJSubject() {
    this.totalCompleteJSubject.next(this.totalCompleteJs.slice());
  }

  saveTotalCompleteJToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalCompleteJ.json', this.totalCompleteJs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalCompleteJ() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalCompleteJ')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceJs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      + this.itemPriceJs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalCompleteJs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // -----

  public saveTotalCompleteDeleteJ() {
    let now: Date = new Date()
    var postsRef = firebase.database().ref('/totalCompleteJ')
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
      this.totalCompleteJs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // tva J --------

  totalTvaJSubject = new Subject<any[]>();
  totalTvaJs = [
    { name: 0 }
  ];

  emitTotalTvaJSubject() {
    this.totalTvaJSubject.next(this.totalTvaJs.slice());
  }

  saveTotalTvaJToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalTvaJ.json', this.totalTvaJs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalTvaJ() {
    let now: Date = new Date();
    const TVA = 20.0;
    var postsRef = firebase.database().ref('/totalTvaJ')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceJs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
      + this.itemPriceJs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalTvaJs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // ------

  public saveTotalTvaDeleteJ() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalTvaJ')
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
      this.totalTvaJs = newPost;

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
