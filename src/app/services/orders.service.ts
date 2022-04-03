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

  // ---- form initialisation -----

  form = new FormGroup({
    customerFirstName: new FormControl(""),
    customerName: new FormControl(""),
    orderNumber: new FormControl(""),
    customerCountry: new FormControl(""),
    kind: new FormControl(""),
    seatOneOrder: new FormControl(""),
    completed: new FormControl(false)
  });

  // ---- create -----

  createSeatOneOrder(data: unknown) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("seatOneOrders")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  // ---- read -----

  getSeatOneOrders() {
    return this.firestore
      .collection("seatOneOrders")
      .snapshotChanges();
  }

  // ---- update -----

  updateSeatOneOrder(data: 
    { payload: 
      { doc: 
        { id: string; 
        }; 
      }; 
    }) {
    return this.firestore
      .collection("seatOneOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  // ---- delete -----

  deleteSeatOneOrder(data: 
    { payload: 
      { doc: 
        { id: string; 
        }; 
      }; 
    }) {
    return this.firestore
      .collection("seatOneOrders")
      .doc(data.payload.doc.id)
      .delete();
  }
}

