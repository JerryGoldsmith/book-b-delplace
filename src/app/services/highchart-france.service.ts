import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
  
@Injectable({
    providedIn: 'root'
})
  export class HighchartFranceService {
    
    private customerAgeCollection: AngularFirestoreCollection < chartModal > ;
    customerAge$: Observable < chartModal[] > ;

    private customerCountryCollection: AngularFirestoreCollection < chartModal > ;
    customerCountry$: Observable < chartModal[] > ;

    constructor(
        private readonly firestoreservice: AngularFirestore
        ) {
      this.customerAgeCollection = firestoreservice.collection < chartModal > ('seatOneOrders', ref => ref

      .where ('customerCountry', '==', 'France')
      .limit(32))

      // .orderBy ('date', 'desc')
      // .limit(32))

    //   .orderBy ('customerCountry', 'asc')
    //   .limit(32))

      this.customerAge$ = this.customerAgeCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as chartModal;
          const id = a.payload.doc.id;
          return {
            id,
            ...data
          };
        }))
      );

      // ----

      this.customerCountryCollection = firestoreservice.collection < chartModal > ('seatOneOrders', ref => ref

      .where ('customerCountry', '==', 'France')
      .limit(32))

    //   .orderBy ('customerCountry', 'asc')
    //   .limit(32))

      this.customerCountry$ = this.customerCountryCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as chartModal;
          const id = a.payload.doc.id;
          return {
            id,
            ...data
          };
        }))
      );
    }
  }
  export interface chartModal {
      currency: string,
      customerAge: number,
      customerCountry: number
  }