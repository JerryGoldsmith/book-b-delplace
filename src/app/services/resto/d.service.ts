import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase/app';
import "firebase/database";

@Injectable({
  providedIn: "root"
})

export class DService {

  // Hoop Tacos M

  // D ----

  priceDSubject = new Subject<any[]>();
  priceDs = [
    { isChecked: false, value: 0, label: "Viande au choix : poulet nature" },
    { isChecked: false, value: 0, label: "Viande au choix : poulet mariné" },
    { isChecked: false, value: 0, label: "Viande au choix : viande de boeuf hachée" },
    { isChecked: false, value: 0, label: "Viande au choix : mergez de boeuf" },
    { isChecked: false, value: 0, label: "Viande au choix : cordon bleu de poulet" },
    { isChecked: false, value: 0, label: "Végétarien au choix : cordon bleu de blé" },
    { isChecked: false, value: 0, label: "Végétarien au choix : falafel" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Barbecue" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Burger" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Algérienne" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Curry" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Ketchup" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Mayonnaise" },
    { isChecked: false, value: 4.50, label: "Bière Française" },
    { isChecked: false, value: 5.00, label: "Bière Américaine" }
  ];

  emitPriceDSubject() {
    this.priceDSubject.next(this.priceDs.slice());
  }

  savePriceDToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceD.json', this.priceDs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  savePriceDFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceD.json')
    .subscribe(
      (response) => {
        // console.log('Chargement terminé');
        this.priceDs = response;
        this.emitPriceDSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  // itemPriceD -------

  itemPriceDSubject = new Subject<any[]>();
  itemPriceDs = [ { value: 6.00 } ];

  emitItemPriceDSubject() {
    this.itemPriceDSubject.next(this.itemPriceDs.slice());
  }

  saveItemPriceDToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceD.json', this.itemPriceDs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveItemPriceDFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceD.json')
    .subscribe(
      (response) => {
        // console.log('Chargement terminé');
        this.itemPriceDs = response;
        this.emitItemPriceDSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  // totalD ------

  totalDSubject = new Subject<any[]>();
  totalDs = [
    { name: 0 }
  ];

  emitTotalDSubject() {
    this.totalDSubject.next(this.totalDs.slice());
  }

  saveTotalDToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalD.json', this.totalDs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalD() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalD')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name: this.priceDs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalDs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // -----

  public saveTotalDeleteD() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalD')
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
      this.totalDs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // complete D --------

  totalCompleteDSubject = new Subject<any[]>();
  totalCompleteDs = [
    { name: 0 }
  ];

  emitTotalCompleteDSubject() {
    this.totalCompleteDSubject.next(this.totalCompleteDs.slice());
  }

  saveTotalCompleteDToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalCompleteD.json', this.totalCompleteDs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalCompleteD() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalCompleteD')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceDs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      + this.itemPriceDs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalCompleteDs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // ------

  public saveTotalCompleteDeleteD() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalCompleteD')
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
      this.totalCompleteDs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // tva D -----

  totalTvaDSubject = new Subject<any[]>();
  totalTvaDs = [
    { name: 0 }
  ];

  emitTotalTvaDSubject() {
    this.totalTvaDSubject.next(this.totalTvaDs.slice());
  }

  saveTotalTvaDToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalTvaD.json', this.totalTvaDs)
    .subscribe(
      () => {
        // console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalTvaD() {
    let now: Date = new Date();
    const TVA = 20.0;
    var postsRef = firebase.database().ref('/totalTvaD')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceDs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
      + this.itemPriceDs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalTvaDs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // ----

  public saveTotalTvaDeleteD() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalTvaD')
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
      this.totalTvaDs = newPost;

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
