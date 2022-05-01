import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
  
@Injectable({
    providedIn: 'root'
})
  export class HighchartService {

    private rateCollection: AngularFirestoreCollection < chartModal > ;
    rates$: Observable < chartModal[] > ;
    
    private customerAgeCollection: AngularFirestoreCollection < chartModal > ;
    customerAge$: Observable < chartModal[] > ;

    constructor(
        private readonly firestoreservice: AngularFirestore
        ) {
      this.rateCollection = firestoreservice.collection < chartModal > ('seatOneOrders');
      // .snapshotChanges() returns a DocumentChangeAction[], which contains
      // a lot of information about "what happened" with each change. If you want to
      // get the data and the id use the map operator.
      this.rates$ = this.rateCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as chartModal;
          const id = a.payload.doc.id;
          return {
            id,
            ...data
          };
        }))
      );
    //   this.customerAge$ = this.customerAgeCollection.snapshotChanges().pipe(
    //     map(actions => actions.map(a => {
    //       const data = a.payload.doc.data() as chartModal;
    //       const id = a.payload.doc.id;
    //       return {
    //         id,
    //         ...data
    //       };
    //     }))
    //   );
    }
  }
  export interface chartModal {
    currency: string,
      rate: number
    //   customerAge: number
  }