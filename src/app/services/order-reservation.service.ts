import { Injectable } from "@angular/core";
import * as Subject from 'rxjs/Subject';
// import { of, pipe } from 'rxjs';
// import { filter, map } from 'rxjs/operators';
import { Seat } from "../models/seats.model";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http'; // Acces Firebase
// import * as firebase from 'firebase/app';
import firebase from "firebase/app";
import "firebase/database";
import {
  AngularFirestore,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: "root"
})
export class OrderReservationService {

  seatOneOrder: Seat[]; // Firestore
  //@ts-ignore
  seatOneSubject = new Subject<any[]>(); // subject (observables)

  results = [];

  seatOnes = [ // rend seulement accessible l'array avec subscrition (observables)
    {
      id: 1,
      name: "Balcon 1",
      status: "allumé",
      fiche: "Balcon"
    },
    {
      id: 2,
      name: "Balcon 2",
      status: "allumé",
      fiche: "Balcon"
    },
    {
      id: 3,
      name: "Balcon 3",
      status: "allumé",
      fiche: "Balcon"
    },
    {
      id: 4,
      name: "Balcon 4",
      status: "allumé",
      fiche: "Balcon"
    },
    {
      id: 5,
      name: "Balcon 5",
      status: "allumé",
      fiche: "Balcon"
    },
    {
      id: 6,
      name: "Balcon 6",
      status: "allumé",
      fiche: "Balcon"
    },
    {
      id: 7,
      name: "Balcon 7",
      status: "allumé",
      fiche: "Balcon"
    },
    {
      id: 8,
      name: "Balcon 8",
      status: "allumé",
      fiche: "Balcon"
    },
    {
      id: 9,
      name: "Balcon 9",
      status: "allumé",
      fiche: "Balcon"
    },
    {
      id: 10,
      name: "Balcon 10",
      status: "allumé",
      fiche: "Balcon"
    },
    {
      id: 11,
      name: "Balcon 11",
      status: "allumé",
      fiche: "Balcon"
    },
    {
      id: 12,
      name: "Balcon 12",
      status: "allumé",
      fiche: "Balcon"
    },
    {
      id: 13,
      name: "Orchestre 13",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 14,
      name: "Orchestre 14",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 15,
      name: "Orchestre 15",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 16,
      name: "Orchestre 16",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 17,
      name: "Orchestre 17",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 18,
      name: "Orchestre 18",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 19,
      name: "Orchestre 19",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 20,
      name: "Orchestre 20",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 21,
      name: "Orchestre 21",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 22,
      name: "Orchestre 22",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 23,
      name: "Orchestre 23",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 24,
      name: "Orchestre 24",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 25,
      name: "Orchestre 25",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 26,
      name: "Orchestre 26",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 27,
      name: "Orchestre 27",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 28,
      name: "Orchestre 28",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 29,
      name: "Orchestre 29",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 30,
      name: "Orchestre 30",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 31,
      name: "Orchestre 31",
      status: "allumé",
      fiche: "Orchestre"
    },
    {
      id: 32,
      name: "Orchestre 32",
      status: "allumé",
      fiche: "Orchestre"
    }
  ];

  constructor(
    private httpClient: HttpClient, // Acces Firebase
    private afs: AngularFirestore
    // private _service: OrderReservationService
  ) {}

  form = new FormGroup({
    id: new FormControl(this.afs.createId()),
    customerFirstName: new FormControl(""),
    customerName: new FormControl(""),
    customerCountry: new FormControl(""),
    // count: new FormControl(firebase.firestore.FieldValue.increment(1)),
    date: new FormControl({time: firebase.firestore.FieldValue.serverTimestamp()}),
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
  createSeatOneOrder(data) { // C is for Create
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

  createSeatOneOrderFinalResult(data) { // C is for Create
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
    return this.afs.firestore['_firebaseApp'].firebase_.firestore.FieldValue.serverTimestamp();
}

  getSeatThreeOrders() { // R is for Read
    return this.afs.collection("seatOneOrders", ref => ref.where ('seatOneOrder', 'array-contains', 6)).snapshotChanges();
    // return this.firestore.collection("seatOneOrders", ref => ref.where ('seatOneOrder', 'array-contains-any', ['Siège 3', 'Siège 11'])).snapshotChanges();
  }

  updateSeatOneOrder(data) { // U is for Update
    return this.afs
      .collection("seatOneOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  deleteSeatOneOrder(data) { // D is for Delete
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
    .put('https://portfolio-bd.firebaseio.com/seats.json', this.seatOnes)
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

  saveSeatsFromFirebaseinServer() { // Acces depuis Firebase
    this.httpClient
    .get<any[]>('https://portfolio-bd.firebaseio.com/seats.json')
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