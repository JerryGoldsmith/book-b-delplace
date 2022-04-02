import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
// import { of, pipe } from 'rxjs';
// import { filter, map } from 'rxjs/operators';
import { Seat } from "../models/seats.model";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http'; // Acces Firebase
import firebase from 'firebase/app';
// import firebase from "firebase/app";
import "firebase/database";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: "root"
})
export class OrderReservationService {

  seatOneOrder: Seat[]; // Firestore
  seatOneSubject = new Subject<any[]>(); // subject (observables)

  results = [];

  seatOnes = [ // rend seulement accessible l'array avec subscrition (observables)
    {
      id: 1,
      name: "Balcon 1",
      status: "allumé",
      kind: "Balcon"
    },
    {
      id: 2,
      name: "Balcon 2",
      status: "allumé",
      kind: "Balcon"
    },
    {
      id: 3,
      name: "Balcon 3",
      status: "allumé",
      kind: "Balcon"
    },
    {
      id: 4,
      name: "Balcon 4",
      status: "allumé",
      kind: "Balcon"
    },
    {
      id: 5,
      name: "Balcon 5",
      status: "allumé",
      kind: "Balcon"
    },
    {
      id: 6,
      name: "Balcon 6",
      status: "allumé",
      kind: "Balcon"
    },
    {
      id: 7,
      name: "Balcon 7",
      status: "allumé",
      kind: "Balcon"
    },
    {
      id: 8,
      name: "Balcon 8",
      status: "allumé",
      kind: "Balcon"
    },
    {
      id: 9,
      name: "Balcon 9",
      status: "allumé",
      kind: "Balcon"
    },
    {
      id: 10,
      name: "Balcon 10",
      status: "allumé",
      kind: "Balcon"
    },
    {
      id: 11,
      name: "Balcon 11",
      status: "allumé",
      kind: "Balcon"
    },
    {
      id: 12,
      name: "Balcon 12",
      status: "allumé",
      kind: "Balcon"
    },
    {
      id: 13,
      name: "Orchestre 13",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 14,
      name: "Orchestre 14",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 15,
      name: "Orchestre 15",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 16,
      name: "Orchestre 16",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 17,
      name: "Orchestre 17",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 18,
      name: "Orchestre 18",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 19,
      name: "Orchestre 19",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 20,
      name: "Orchestre 20",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 21,
      name: "Orchestre 21",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 22,
      name: "Orchestre 22",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 23,
      name: "Orchestre 23",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 24,
      name: "Orchestre 24",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 25,
      name: "Orchestre 25",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 26,
      name: "Orchestre 26",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 27,
      name: "Orchestre 27",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 28,
      name: "Orchestre 28",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 29,
      name: "Orchestre 29",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 30,
      name: "Orchestre 30",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 31,
      name: "Orchestre 31",
      status: "allumé",
      kind: "Orchestre"
    },
    {
      id: 32,
      name: "Orchestre 32",
      status: "allumé",
      kind: "Orchestre"
    }
  ];

  constructor(
    private httpClient: HttpClient, // Acces Firebase
    private afs: AngularFirestore
  ) {}

  form = new FormGroup({
    id: new FormControl(this.afs.createId()),
    customerFirstName: new FormControl(""),
    customerName: new FormControl(""),
    customerCountry: new FormControl(""),
    // count: new FormControl(firebase.firestore.FieldValue.increment(1)),
    date: new FormControl(
      {
        time: firebase.firestore.FieldValue.serverTimestamp()
      }),
    // seat: new FormControl(""),
    seatOneOrder: new FormControl(""),
    completed: new FormControl(false)
  });

  // -------------- subject (observable) -----------------

  emitSeatOneSubject() { // emit comme envoi des données (observables)
    // this.seatOneSubject.next(this.seatOnes.slice(+1));
    this.seatOneSubject.next(this.seatOnes.slice()); // la methode slice() pour faire une copie du tableau appareils
  } // permet aux différentes méthodes de ce service d'accéder au tableau

  //Firestore CRUD actions
  createSeatOneOrder(data: unknown) { // C is for Create
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection("seatOneOrders")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  createOneSingle() { // C is for Create
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection("seatOneOrders")
        .doc("seatOne")
        .set({
          seat: "Siège 1"
        })
        .then(res => {}, err => reject(err));
    });
  }

  createTwoSingle() { // C is for Create
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection("seatOneOrders")
        .doc("seatTwo")
        .set({
          seat: "Siège 2"
        })
        .then(res => {}, err => reject(err));
    });
  }

  createSeatOneOrderFinalResult(data: Partial<unknown>) { // C is for Create
    var seatsRef = this.afs.collection("seatOneOrders").doc("results-id")
    return  new Promise<any>((resolve, reject) => {
      seatsRef
      // .set({
      //   customerFirstName: "Tom",
      //   customerName: "Tim",
      //   customerCountry: "USA"
      // })
        .update(data)
        .then(res => {}, err => reject(err));
        console.log("Document successfully written!");
    });
  }

  createSeatOneOrderFinalResultCount() { // C is for Create
    var seatsRef = this.afs.collection("seatOneOrders").doc("results-id")
    return  seatsRef
        .update({ SeatsCount: firebase.firestore.FieldValue.increment(1) })
  }

  getSeatAdminOrders() { // R is for Read
    return this.afs.collection("seatOneOrders").snapshotChanges();
  }

  getSeatOneOrders() { // R is for Read
    return this.afs.collection("seatOneOrders", ref => ref
    .orderBy ('date', 'desc')
    .limit(1))
    // .startAfter(0)
    // .endAt(1))
    .snapshotChanges();
    // return this.afs.collection("seatOneOrders").snapshotChanges();
  }

  getSeatTwoOrders() { // R is for Read

    return this.afs.collection("seatOneOrders", ref => ref
    .orderBy ('id')
    .limit(1))
    .snapshotChanges();
  }

  private getTimestamp(): Object {
    return this.afs.firestore['_firebaseApp']
      .firebase_.firestore.FieldValue.serverTimestamp();
}

  getSeatThreeOrders() { // R is for Read
    return this.afs.collection("seatOneOrders", 
      ref => ref.where ('seatOneOrder', 'array-contains', 6)).snapshotChanges();
    // return this.firestore.collection("seatOneOrders", ref => ref.where ('seatOneOrder', 'array-contains-any', ['Siège 3', 'Siège 11'])).snapshotChanges();
  }

  updateSeatOneOrder(data: { payload: { doc: { id: string; }; }; }) { // U is for Update
    return this.afs
      .collection("seatOneOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  deleteSeatOneOrder(data: { payload: { doc: { id: string; }; }; }) { // D is for Delete
    return this.afs
      .collection("seatOneOrders")
      .doc(data.payload.doc.id)
      .delete();
  }

  // ------------- routing parametres (id) -------------------

  getSeatById(id: number) { // routes parametres avec id (number pour retrouver par son identifiant)
    const seatOne = this.seatOnes.find(
      (seatOneObject) => {
        return seatOneObject.id === id;
      }
    );
    return seatOne;
  }

  getDate() {
    this.afs.collection('events' , ref => ref.where('date' , '<' , new Date()))
    .snapshotChanges();
  }

  // ----------- methodes liée au status des appareils ------------------

  switchOnAll() {
    for(let seatOne of this.seatOnes) {
      seatOne.status = 'allumé';
    }
    this.emitSeatOneSubject(); // permet d'émmetre le subject après la manipulation
  }

  switchOffAll() {
    for(let seatOne of this.seatOnes) {
      seatOne.status = "éteint";
    }
    this.emitSeatOneSubject(); // permet d'émmetre le subject après la manipulation
  }

  // ----------- methodes liée au status des seats (avec index) ----------------

  switchOnOne(i: number) {
    this.seatOnes[i].status = 'allumé';
    this.emitSeatOneSubject(); // permet d'émettre le subject après la manipulation
  }

  switchOffOne(i: number) {
    this.seatOnes[i].status = 'éteint';
    this.emitSeatOneSubject(); // permet d'émettre le subject après la manipulation
  }

  // ----------- methodes liée au status des seats (avec index) ----------------

  saveSeatsToFirebaseinServer() { // Acces vers Firebase
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/seats.json', this.seatOnes)
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

  saveSeatsFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/seats.json')
    // get pour récupérer les données depuis firebase
    .subscribe( // réagit à la réponse du serveur
      (response) => {
        console.log('Chargement terminé');
        this.seatOnes = response;
        this.emitSeatOneSubject();
      },
      (error) => {
        console.log('Erreur de chargement !' + error);
      }
    );
  }
}
