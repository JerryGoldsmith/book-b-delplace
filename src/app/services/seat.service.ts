import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject'; // import observables avec rxjs
import { FormControl, FormGroup } from "@angular/forms";
import * as firebase from 'firebase/app';
// import firebase from "firebase/app";
import "firebase/database";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})

export class SeatService {

  seatSubject = new Subject<any[]>(); // subject (observables)

  seatOnes = [ // rend seulement accessible l'array avec subscrition (observables)
    {
      id: 1,
      name: "One",
      status: "éteint",
      fiche: "De nouveaux témoignages sont venus corroborer lundi 27 avril les accusations portées par Tara Reade, ancienne collaboratrice de Joe Biden au Sénat. Selon la presse américaine, les démocrates hésitent entre garder le silence et demander au candidat à la présidentielle de s’expliquer."
    },
    {
      id: 2,
      name: "Two",
      status: "allumé",
      fiche: "Il va être de plus en plus compliqué pour Joe Biden d’éviter le sujet. Au sein du parti démocrate, la pression s’est accrue mardi 28 avril pour que le candidat à la présidentielle."
    },
    {
      id: 3,
      name: "Three",
      status: "allumé",
      fiche: "En avril 2019, plusieurs femmes, dont Reade, se sont manifestées pour dire que Biden les avait mises mal à l’aise en les touchant de manière inappropriée lors d’événements publics."
    },
    {
      id: 4,
      name: "Four",
      status: "éteint",
      fiche: "Après avoir déclaré pendant plus d’un an que, “pendant qu’elle travaillait pour lui”, Biden lui touchait les épaules et le cou “d’une manière qui la mettait mal à l’aise”, elle a déclaré fin mars avoir été victime d’une agression sexuelle de la part du sénateur démocrate “dans un couloir du Capitole” et déposé une plainte auprès de la police de Washington."
    }
  ];

  constructor(
    private firestore: AngularFirestore
  ) {}

  form = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    country: new FormControl(""),
    choiceOfSeat: new FormControl(""),
    status: new FormControl("")
    // completed: new FormControl(false)
  });

  // ------------- routing parametres (id) -------------------

  getSeatById(id: number) { // routes parametres avec id (number pour retrouver par son identifiant)
    const seat = this.seatOnes.find(
      (seatObject) => {
        return seatObject.id === id;
      }
    );
    return seat;
  }

  // -------------- subject (observable) -----------------

  emitSeatOneSubject() { // emit comme envoi des données (observables)
    this.seatSubject.next(this.seatOnes.slice()); // la methode slice() pour faire une copie du tableau appareils
  } // permet aux différentes méthodes de ce service d'accéder au tableau

  // ----------- methodes liée au status des appareils ------------------

  switchOnAll() {
    for(let seat of this.seatOnes) {
      seat.status = 'allumé';
    }
    this.emitSeatOneSubject(); // permet d'émmetre le subject après la manipulation
  }

  switchOffAll() {
    for(let seat of this.seatOnes) {
      seat.status = "éteint";
    }
    this.emitSeatOneSubject(); // permet d'émmetre le subject après la manipulation
  }

  // ----------- methodes liée au status des appareils (avec index) ----------------

  switchOnOne(i: number) {
    this.seatOnes[i].status = 'allumé';
    this.emitSeatOneSubject(); // permet d'émmetre le subject après la manipulation
  }

  switchOffOne(i: number) {
    this.seatOnes[i].status = 'éteint';
    this.emitSeatOneSubject(); // permet d'émmetre le subject après la manipulation
  }

  // --------------- methodes liée à edits ---------------

  // méthode template (ajoute un nouvel appareil)

  // addSeat(
  //   firstName: string,
  //   lastName: string,
  //   country: string,
  //   choiceOfSeat: string,
  //   status: string) {
  //   const seatObject = {
  //     id: 0, // démarre à 0 d'où (this.appareils.length - 1) ci-dessous
  //     // path: '', // dans l'array donc il faut le mettre !
  //     firstName: '',
  //     lastName: '',
  //     country: '',
  //     choiceOfSeat: '',
  //     status: ''
  //   };
  //   seatObject.id = this.seatOnes[(this.seatOnes.length - 1)].id + 1;
  //   seatObject.firstName = firstName;
  //   seatObject.lastName = lastName;
  //   seatObject.country = country;
  //   seatObject.choiceOfSeat = choiceOfSeat;
  //   seatObject.status = status;
  //
  //   this.seatOnes.push(seatObject);
  //   this.emitSeatOneSubject();
  // }

  //Firestore CRUD actions
  createSeatOrder(data) { // C is for Create
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("seatOrders")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  getSeatOrders() { // R is for Read
    return this.firestore.collection("seatOrders").snapshotChanges();
  }

  updateSeatOrder(data) { // U is for Update
    return this.firestore
      .collection("seatOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  deleteSeatOrder(data) { // D is for Delete
    return this.firestore
      .collection("seatOrders")
      .doc(data.payload.doc.id)
      .delete();
  }
}
