import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Seat } from "../models/seats.model";
import { FormControl, FormGroup } from "@angular/forms";
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
    // id: new FormControl(this.afs.createId()),
    date: new FormControl(
      {
        time: firebase.firestore.FieldValue.serverTimestamp()
      }),
    customerFirstName: new FormControl(""),
    customerName: new FormControl(""),
    customerCountry: new FormControl(""),
    customerAge: new FormControl(""),
    color: new FormControl(""),
    seatOneOrder: new FormControl(""),
    completed: new FormControl(false),
    checked: new FormControl(false)
  });

  // -----------------------------
  // FIREBASE > FIRESTORE DATABASE
  // -----------------------------

  // ---- create -----

  async createSeatOneOrder(data: unknown) {
    return new Promise<any>(async (resolve, reject) => {
      await this.afs
        .collection("seatOneOrders")
        .add(data)
        .then(result => {
          resolve(result);
        }).catch(err => {
          reject(err);
        });
    });
  }

  // ---- read -----

  getSeatAdminOrders() {
    return this.afs
      .collection("seatOneOrders")
      .snapshotChanges();
  }

  // only current user
  getSeatCurrentUser() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      // .orderBy('id')
      .limit(1))
      .snapshotChanges();
  }

  getSeatCurrentDate() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .orderBy ('date', 'desc')
      .limit(1))
      .snapshotChanges();
  }

  // by dates
  getSeatByDates() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .orderBy ('date', 'desc')
      .limit(32))
      .snapshotChanges();
  }

  // by country
  getSeatByCountry() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .orderBy ('customerCountry', 'asc')
      .limit(32))
      .snapshotChanges();
  }

  // by country && only USA
  getSeatByUSA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('customerCountry', '==', 'USA')
      .limit(32))
      .snapshotChanges();
  }

  // by country USA && firstName Tom
  getSeatByCountryFirstName() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      // .where ('customerCountry', '==', 'USA')
      .where ('customerFirstName', '==', 'Tom')
      .orderBy ('customerCountry', 'asc')
      .limit(32))
      .snapshotChanges();
  }

  // by country USA && firstName Tom && < 50 years old
  getSeatByCountryFirstNameAge() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('customerCountry', '==', 'USA')
      .where ('customerFirstName', '==', 'Tom')
      // .where ('customerAge', '<', 50)
      .limit(32))
      .snapshotChanges();
  }

  // by USA && < 50 years old
  getSeatByUSAAge() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('customerCountry', '==', 'USA')
      .where ('customerAge', '<', 50)
      // .orderBy ('customerCountry', 'desc')
      .limit(32))
      .snapshotChanges();
  }

  // by France && USA && > 50 years old
  getSeatByFranceAge() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('customerCountry', 'in', ['France', 'USA'])
      // .where ('customerAge', '<', 50)
      .orderBy("customerAge", "desc")
      .limit(32))
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

  // completed
  async updateSeatCompleted(data: { payload: { doc: { id: string; }; }; }) { // U is for Update
    await this.afs
      .collection("seatOneOrders")
      .doc(data
        .payload
        .doc
        .id)
      .set({ completed: true }, { merge: true });
  }

  // checked
  async updateSeatChecked(data: { payload: { doc: { id: string; }; }; }) { // U is for Update
    await this.afs
      .collection("seatOneOrders")
      .doc(data
        .payload
        .doc
        .id)
      .set({ checked: true }, { merge: true });
  }

  // submit
  async updateSeatOneOrder(data: { 
    payload: { 
      doc: { 
      id: string; 
      }; 
    }; 
  }) {
  await this.afs
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

  async deleteSeatOneOrder(data: { 
    payload: { 
      doc: { 
        id: string; 
      }; 
    }; 
  }) {
  await this.afs
    .collection("seatOneOrders")
    .doc(data
      .payload
      .doc
      .id)
    .delete();
  }

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

  // -------

  getSeatByUser(id: number) { // id
    let userId = firebase.auth().currentUser.uid
    const seatOne = this.seatOnes
      .find(
      (seatOneObject) => {
        return seatOneObject.id === id;
      }
    );
    return seatOne + userId;
  }

  // getSeatById(id: number) { // id
  //   const seatOne = this.seatOnes
  //     .find(
  //     (seatOneObject) => {
  //       return seatOneObject.id === id;
  //     }
  //   );
  //   return seatOne;
  // }

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

  switchOffOne(i: number) { // off index
    this.seatOnes[i].status = 'éteint';
    this.emitSeatOneSubject();
  }
}
