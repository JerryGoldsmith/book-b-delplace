import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase/app';
import "firebase/database";

@Injectable({
  providedIn: "root"
})

export class EService {

  // Hoop Tacos XL

  // E ----

  priceESubject = new Subject<any[]>();
  priceEs = [
    { isChecked: false, value: 1, label: "Viande au choix : poulet nature" },
    { isChecked: false, value: 1, label: "Viande au choix : poulet mariné" },
    { isChecked: false, value: 1, label: "Viande au choix : viande de boeuf hachée" },
    { isChecked: false, value: 1, label: "Viande au choix : mergez de boeuf" },
    { isChecked: false, value: 1, label: "Viande au choix : cordon bleu de poulet" },
    { isChecked: false, value: 1, label: "Végétarien au choix : cordon bleu de blé" },
    { isChecked: false, value: 1, label: "Végétarien au choix : falafel" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Barbecue" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Burger" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Algérienne" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Curry" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Ketchup" },
    { isChecked: false, value: 0.50, label: "Sauce au choix : Mayonnaise" },
    { isChecked: false, value: 4.50, label: "Bière Française" },
    { isChecked: false, value: 5.00, label: "Bière Américaine" }
  ];

  emitPriceESubject() {
    this.priceESubject.next(this.priceEs.slice());
  }

  savePriceEToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceE.json', this.priceEs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  savePriceEFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceE.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.priceEs = response;
        this.emitPriceESubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  savePriceE() {
    firebase.database().ref('/priceE').set(this.priceEs);
  }

  // itemPriceE ---------

  itemPriceESubject = new Subject<any[]>();
  itemPriceEs = [ { value: 12.00 } ];

  emitItemPriceESubject() {
    this.itemPriceESubject.next(this.itemPriceEs.slice());
  }

  saveItemPriceEToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceE.json', this.itemPriceEs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveItemPriceEFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceE.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.itemPriceEs = response;
        this.emitItemPriceESubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  // totalE ------

  totalESubject = new Subject<any[]>();
  totalEs = [
    { name: 0 }
  ];

  emitTotalESubject() {
    this.totalESubject.next(this.totalEs.slice());
  }

  saveTotalEToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalE.json', this.totalEs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalE() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalE')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name: this.priceEs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalEs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // ------

  public saveTotalDeleteE() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalE')
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
      this.totalEs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // complete E --------

  totalCompleteESubject = new Subject<any[]>();
  totalCompleteEs = [
    { name: 0 }
  ];

  emitTotalCompleteESubject() {
    this.totalCompleteESubject.next(this.totalCompleteEs.slice());
  }

  saveTotalCompleteEToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalCompleteE.json', this.totalCompleteEs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalCompleteE() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalCompleteE')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceEs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      + this.itemPriceEs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalCompleteEs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // ----

  public saveTotalCompleteDeleteE() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalCompleteE')
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
      this.totalCompleteEs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // tva E ------

  totalTvaESubject = new Subject<any[]>();
  totalTvaEs = [
    { name: 0 }
  ];

  emitTotalTvaESubject() {
    this.totalTvaESubject.next(this.totalTvaEs.slice());
  }

  saveTotalTvaEToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalTvaE.json', this.totalTvaEs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalTvaE() {
    let now: Date = new Date();
    const TVA = 20.0;
    var postsRef = firebase.database().ref('/totalTvaE')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceEs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
      + this.itemPriceEs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalTvaEs = newPost;

      let dataArray = {};
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
        });
        return value + postId;
    });
  }

  // ------

  public saveTotalTvaDeleteE() {
    let now: Date = new Date();
    var postsRef = firebase.database().ref('/totalTvaE')
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
      this.totalTvaEs = newPost;

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
