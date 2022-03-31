import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class OrdersService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  form = new FormGroup({
    customerFirstName: new FormControl(""),
    customerName: new FormControl(""),
    orderNumber: new FormControl(""),
    customerCountry: new FormControl(""),
    // coffeeOrder: new FormControl(""),
    seatOneOrder: new FormControl("")
    // completed: new FormControl(false)
  });

  //Firestore CRUD actions example
  // createCoffeeOrder(data: unknown) { // C is for Create
  //   return new Promise<any>((resolve, reject) => {
  //     this.firestore
  //       .collection("coffeeOrders")
  //       .add(data)
  //       .then(res => {}, err => reject(err));
  //   });
  // }

  createSeatOneOrder(data: unknown) { // C is for Create
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("seatOneOrders")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  // getCoffeeOrders() { // R is for Read
  //   return this.firestore.collection("coffeeOrders").snapshotChanges();
  // }

  getSeatOneOrders() { // R is for Read
    return this.firestore.collection("seatOneOrders").snapshotChanges();
  }

  // updateCoffeeOrder(data: { payload: { doc: { id: string; }; }; }) { // U is for Update
  //   return this.firestore
  //     .collection("coffeeOrders")
  //     .doc(data.payload.doc.id)
  //     .set({ completed: true }, { merge: true });
  // }

  updateSeatOneOrder(data: { payload: { doc: { id: string; }; }; }) { // U is for Update
    return this.firestore
      .collection("seatOneOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  // deleteCoffeeOrder(data: { payload: { doc: { id: string; }; }; }) { // D is for Delete
  //   return this.firestore
  //     .collection("coffeeOrders")
  //     .doc(data.payload.doc.id)
  //     .delete();
  // }

  deleteSeatOneOrder(data: { payload: { doc: { id: string; }; }; }) { // D is for Delete
    return this.firestore
      .collection("seatOneOrders")
      .doc(data.payload.doc.id)
      .delete();
  }
}
