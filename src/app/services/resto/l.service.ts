import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase/app';
import "firebase/database";

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
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceL.json', this.priceLs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  savePriceLFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceL.json')
    .subscribe(
      (response) => {
        // console.log('Chargement terminé');
        this.priceLs = response;
        this.emitPriceLSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
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
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceL.json', this.itemPriceLs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveItemPriceLFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceL.json')
    .subscribe(
      (response) => {
        // console.log('Chargement terminé');
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
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalL.json', this.totalLs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalL() {
    let now: Date = new Date();
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

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // ------

  public saveTotalDeleteL() {
    let now: Date = new Date();
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

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
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
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalCompleteL.json', this.totalCompleteLs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalCompleteL() {
    let now: Date = new Date();
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

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // -----

  public saveTotalCompleteDeleteL() {
    let now: Date = new Date();
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

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
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
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalTvaL.json', this.totalTvaLs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalTvaL() {
    let now: Date = new Date();
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

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // ------

  public saveTotalTvaDeleteL() {
    let now: Date = new Date();
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
