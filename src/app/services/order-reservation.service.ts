import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Seat } from "../models/seats.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http'; // Acces Firebase
import firebase from 'firebase/app';
import "firebase/database";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: "root"
})
export class OrderReservationService {

  seatOneOrder: Seat[];
  seatOneSubject = new Subject<any[]>();

  results = [];

  seatOnes = [
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
    private httpClient: HttpClient,
    private afs: AngularFirestore
  ) {}

  // ---- form initialisation -----

  form = new FormGroup({
    id: new FormControl(this.afs.createId()),
    customerFirstName: new FormControl(""),
    customerName: new FormControl(""),
    customerCountry: new FormControl(""),
    customerAge: new FormControl(""),
    date: new FormControl(
      {
        time: firebase.firestore.FieldValue.serverTimestamp()
      }),
    seatOneOrder: new FormControl(""),
    completed: new FormControl(false)
  });

  // -----------------------------
  // FIREBASE > FIRESTORE DATABASE
  // -----------------------------

  // ---- create -----

  createSeatOneOrder(data: unknown) {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection("seatOneOrders")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  createOneSingle() {
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

  createTwoSingle() {
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

  createSeatOneOrderFinalResult(data: Partial<unknown>) {
    var seatsRef = this.afs
      .collection("seatOneOrders")
      .doc("results-id")
    return  new Promise<any>((resolve, reject) => {
      seatsRef
        .update(data)
        .then(res => {}, err => reject(err));
        console.log("Document successfully written!");
    });
  }

  createSeatOneOrderFinalResultCount() {
    var seatsRef = this.afs
      .collection("seatOneOrders")
      .doc("results-id")
    return  seatsRef
        .update({ 
          SeatsCount: firebase.firestore
          .FieldValue.increment(1) 
        })
  }

  // ---- read -----

  getSeatById(id: number) { // id
    const seatOne = this.seatOnes
      .find(
      (seatOneObject) => {
        return seatOneObject.id === id;
      }
    );
    return seatOne;
  }

  getSeatAdminOrders() {
    return this.afs
      .collection("seatOneOrders")
      .snapshotChanges();
  }

  // by country
  getSeatByCountry() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .orderBy ('customerCountry', 'asc')
      .limit(100))
      .snapshotChanges();
  }

  // by country && only USA
  getSeatByUSA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('customerCountry', '==', 'USA')
      .limit(100))
      .snapshotChanges();
  }

  // by country && firstName
  getSeatByCountryFirstName() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('customerCountry', '==', 'USA')
      .where ('customerFirstName', '==', 'Tom')
      .limit(100))
      .snapshotChanges();
  }

  // by country && age
  getSeatByCountryAge() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('customerCountry', '==', 'USA')
      .where ('customerAge', '<', 50)
      .limit(100))
      .snapshotChanges();
  }

  getSeatOneOrders() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .orderBy ('date', 'desc')
      .limit(1))
      .snapshotChanges();
  }

  getSeatTwoOrders() {

    return this.afs
      .collection("seatOneOrders", ref => ref
      .orderBy ('id')
      .limit(1))
      .snapshotChanges();
  }

  getSeatThreeOrders() {
    return this.afs
      .collection("seatOneOrders", 
      ref => ref.where ('seatOneOrder', 'array-contains', 6))
      .snapshotChanges();
  }

  getSeatBySeatsAscent() {
    return this.afs
      .collection("seatOneOrders", 
      ref => ref.where ('seatOneOrder', 'array-contains', 100))
      .snapshotChanges();
  }

  getDate(): void {
    this.afs
      .collection('events' , 
      ref => ref.where('date' , '<' , new Date()))
      .snapshotChanges();
  }

  // ---- update -----

  updateSeatOne() { // U is for Update
    return this.afs
      .collection("seatOneOrders")
      .doc("completed")
      .set({ completed: true }, { merge: true });
  }

  updateSeatOneOrder(data: { 
    payload: { 
      doc: { 
      id: string; 
      }; 
    }; 
  }) {
  return this.afs
    .collection("seatOneOrders")
    .doc(data
      .payload
      .doc
      .id)
    .set({ 
      completed: true
      }, { 
      merge: true 
    });
  }

  // ---- delete -----

  deleteSeatOneOrder(data: { 
    payload: { 
      doc: { 
        id: string; 
      }; 
    }; 
  }) {
  return this.afs
    .collection("seatOneOrders")
    .doc(data
      .payload
      .doc
      .id)
    .delete();
  }

  // ---------------

  // private getTimestamp(): Object {
  //   return this.afs.firestore['_firebaseApp']
  //     .firebase_.firestore.FieldValue.serverTimestamp();
  // }

  // ----------------------------
  // FIREBASE > REALTIME DATABASE
  // ----------------------------

  emitSeatOneSubject() {
    this.seatOneSubject.next(this.seatOnes);
    // console.log('emitSeatOneSubject : ' + this.seatOnes);
  }

  // ---- to Firebase -------

  saveSeatsToFirebaseinServer() { 
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/seats.json', this.seatOnes)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveSeatsObjectToArrayToFirebaseinServer() { 
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/seats.json', this.seatOnes)
    .subscribe(
      () => {

        var postsRef = firebase.database().ref('/seats')
        postsRef
        .orderByKey()
        .on('value', (snapshot) => {

          // convert Object to Array
          let dataArray = [];
            const value = snapshot.forEach((childSnapshot): void => {
            dataArray[childSnapshot.key] = childSnapshot.val();
            console.log('Seats childSnapshot.key : ' + childSnapshot.key);
          });

          console.log('Seats value : ' + value);
          return value;

        });

        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveSeatsSelectToFirebaseinServer() { 
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/seats.json', this.seatOnes)
    .subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  // ---- from Firebase -------

  saveSeatsFromFirebaseinServer() {
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/seats.json')
    .subscribe( 
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

  public saveSeats(): void { 
    var postsRef = firebase.database().ref('/seats')
    postsRef
    .orderByKey()
    .on('value', (snapshot) => {

      // convert Object to Array
      let dataArray = [];
          const value = snapshot.forEach((childSnapshot): void => {
          dataArray[childSnapshot.key] = childSnapshot.val();
          console.log('Seats childSnapshot.key : ' + childSnapshot.key);
        });

        console.log('Seats value : ' + value);
        return value;

    });
  }

  // --------------
  //  SWITCH STATUS
  // --------------

  switchOnAll() { // on all
    for(let seatOne of this.seatOnes) {
      seatOne.status = 'allumé';
    }
    this.emitSeatOneSubject();
  }

  switchOffAll() { // off all
    for(let seatOne of this.seatOnes) {
      seatOne.status = "éteint";
    }
    this.emitSeatOneSubject();
  }

  switchOnOne(i: number) { // on index
    this.seatOnes[i].status = 'allumé';
    this.emitSeatOneSubject();
  }

  // switchMiddleOne(i: number) { // on index
  //   this.seatOnes[i].status = 'middle';
  //   this.emitSeatOneSubject();
  // }

  switchOffOne(i: number) { // off index
    this.seatOnes[i].status = 'éteint';
    this.emitSeatOneSubject();
  }
}
