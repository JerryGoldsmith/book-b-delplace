import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { FormControl, FormGroup } from "@angular/forms";
import "firebase/database";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})

export class SeatService {

  seatSubject = new Subject<any[]>();

  seatOnes = [
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

  // ---- form initialisation -----

  form = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    country: new FormControl(""),
    choiceOfSeat: new FormControl(""),
    status: new FormControl("")
  });

  // --------- emit ---------

  emitSeatOneSubject() {
    this.seatSubject.next(this.seatOnes.slice());
  }

  // ---- create -----

  createSeatOrder(data: unknown) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("seatOrders")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  // ---- read -----

  getSeatById(id: number) { // id
    const seat = this.seatOnes.find(
      (seatObject) => {
        return seatObject.id === id;
      }
    );
    return seat;
  }

  getSeatOrders() {
    return this.firestore.collection("seatOrders").snapshotChanges();
  }

  // ---- update -----

  updateSeatOrder(data: 
    { payload: 
      { doc: 
        { id: string; 
        }; 
      }; 
    }) {
    return this.firestore
      .collection("seatOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  // ---- delete -----

  deleteSeatOrder(data: 
    { payload: 
      { doc: 
        { id: string; 
        }; 
      }; 
    }) {
    return this.firestore
      .collection("seatOrders")
      .doc(data.payload.doc.id)
      .delete();
  }

  // -------- status on/off ----------

  switchOnAll() { // on all
    for(let seat of this.seatOnes) {
      seat.status = 'allumé';
    }
    this.emitSeatOneSubject();
  }

  switchOffAll() { // off all
    for(let seat of this.seatOnes) {
      seat.status = "éteint";
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
