import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase/app';
import "firebase/database";
import { O2A } from 'object-to-array-convert';

@Injectable({
  providedIn: "root"
})

export class AService {

  // Saumon

  // A ------------

  priceASubject = new Subject<any[]>() as any;
  private priceAs = [
    { isChecked: false, value: 0.50, label: "Sauce Soja" },
    { isChecked: false, value: 4.50, label: "Bière Chinoise" },
    { isChecked: false, value: 3.50, label: "Bière Japonaise" },
    { isChecked: false, value: 4.50, label: "Bière Française" },
    { isChecked: false, value: 5.00, label: "Bière Américaine" }
  ];

  emitPriceASubject() {
    this.priceASubject.next(this.priceAs.slice());
  }

  savePriceAToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceA.json', this.priceAs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  savePriceAFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/priceA.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.priceAs = response;
        this.emitPriceASubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  savePriceA() {
    firebase.database().ref('/priceA')
    .set(this.priceAs);
  }

  // itemPriceA --------

  itemPriceASubject = new Subject<any[]>();
  private itemPriceAs = [ { value: 8.00 } ].slice();

  emitItemPriceASubject() {
    this.itemPriceASubject.next(this.itemPriceAs);
  }

  saveItemPriceAToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceA.json', this.itemPriceAs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveItemPriceAFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/itemPriceA.json')
    .subscribe(
      (response) => {
        console.log('Chargement terminé');
        this.itemPriceAs = response;
        this.emitItemPriceASubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }

  // --------

  totalASubject = new Subject<any[]>();
  totalAs = [
    { name: 0 }
  ];

  emitTotalASubject() {
    this.totalASubject.next(this.totalAs.slice());
  }

  saveTotalAToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalA.json', this.totalAs)
    // put plutôt que post : s'il existe déjà sur firebase, put va l'écraser
    .subscribe( // réagit à la réponse du serveur
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalA() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    // autre possibilité :
    // let premiumExpireDate: Date = new Date();
    // premiumExpireDate.setDate(premiumExpireDate.getDate());

    // var getDateTime = Date();
    // var getDateTime = new Date().toString();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalA')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      // autre possibilité :
      // premiumExpireDate: premiumExpireDate.getTime(),
      name: this.priceAs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key; // Get the unique key generated by push()
    postsRef
    // affiche seulement les valeurs 7 dans 'name'
    // .orderByChild('name')
    // .equalTo(7)

    // Query by key (exemple : 'MTLilFiuBaVHXjKg7I4')
    .orderByKey()
    .equalTo(postId)
    // .startAt(postId)
    // .endAt(postId)

    // Query by timestamp (exemple dans child 'timestamp': '1613141333948')
    // .orderByChild('timestamp')
    // .startAt(getDateTime)
    // .endAt(getDateTime)
    // .limitToLast(3)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalAs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  public saveTotalDeleteA() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalA')
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
      this.totalAs = newPost;
      const value = O2A(snapshot); // Object-To-Array-Convert
        return value + postId; // Object-To-Array-Convert
    });
  }

  // complete A --------

  totalCompleteASubject = new Subject<any[]>();
  totalCompleteAs = [
    { name: 0 }
  ];

  emitTotalCompleteASubject() {
    this.totalCompleteASubject.next(this.totalCompleteAs.slice());
  }

  saveTotalCompleteAToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalCompleteA.json', this.totalCompleteAs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalCompleteA() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteA')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceAs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      + this.itemPriceAs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
    });
    var postId = newPostRef.key;
    postsRef
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalCompleteAs = newPost;
      const value = O2A(snapshot);
        return value + postId;
    });
  }

  // ----

  public saveTotalCompleteDeleteA() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalCompleteA')
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
      this.totalCompleteAs = newPost;
      const value = O2A(snapshot);
        return value + postId;
    });
  }

  // tva A --------

  totalTvaASubject = new Subject<any[]>();
  totalTvaAs = [
    { name: 0 }
  ];

  emitTotalTvaASubject() {
    this.totalTvaASubject.next(this.totalTvaAs.slice());
  }

  saveTotalTvaAToFirebaseinServer() {
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/totalTvaA.json', this.totalTvaAs)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  public saveTotalTvaA() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    const TVA = 20.0;
    var postsRef = firebase.database().ref('/totalTvaA')
    var newPostRef = postsRef.push({
      timestamp: now.getTime(),
      name:
      this.priceAs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
      + this.itemPriceAs.filter(x => x).reduce((a, b) => a + b.value + 0, 0)
      * TVA / 100
    });
    var postId = newPostRef.key;
    postsRef
    // .orderByChild('timestamp')
    // .startAt(getDateTime)
    // .endAt(getDateTime)
    // .limitToLast(3)
    .orderByKey()
    .equalTo(postId)
    .on('value', (snapshot) => {
      var newPost =  snapshot.val() ? snapshot.val() : [];
      this.totalTvaAs = newPost;
      const value = O2A(snapshot);
        return value + postId;
    });
  }

  // ----

  public saveTotalTvaDeleteA() {
    var dateTime = firebase.database.ServerValue.TIMESTAMP
    let now: Date = new Date();
    var getDateTime = now.getTime();
    var postsRef = firebase.database().ref('/totalTvaA')
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
      this.totalTvaAs = newPost;
      const value = O2A(snapshot);
        return value + postId;
    });
  }

  // ---------------------------------------------

  constructor(
    private httpClient: HttpClient
    // private firestore: AngularFirestore
  ) {}
}
