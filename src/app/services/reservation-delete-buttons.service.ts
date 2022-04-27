import { Injectable } from "@angular/core";
import "firebase/database";
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from "firebase";

@Injectable({
    providedIn: "root"
  })

export class ReservationDeleteButtonsService {

    constructor(
        private afs: AngularFirestore
      ) {}

      getSeatDeleteButtonInit() {
        return this.afs
          .collection("seatOneOrders", ref => ref
          .limit(1))
          .snapshotChanges()
      }

      getSeatsById() {
        return this.afs
          .collection("seatOneOrders", ref => ref
          // .where(firebase.firestore.FieldPath.documentId(),"in",["104","102","101"])
          .where ('seatOneOrder', 'array-contains', 'Balcon 6')
          .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
          .limit(1))
          .snapshotChanges()
      }

      /*
  AA > Balcon 1
  BA > Balcon 2 
  CA > Balcon 3
  DA > Balcon 4
  EA > Balcon 5
  FA > Balcon 6
  GA > Balcon 7
  HA > Balcon 8
  IA > Balcon 9
  JA > Balcon 10
  KA > Balcon 11
  LA > Balcon 12
  MA > Orchestre 13
  NA > Orchestre 14
  OA > Orchestre 15
  PA > Orchestre 16
  QA > Orchestre 17
  RA > Orchestre 18
  SA > Orchestre 19
  TA > Orchestre 20
  UA > Orchestre 21
  VA > Orchestre 22
  WA > Orchestre 23
  XA > Orchestre 24
  YA > Orchestre 25
  ZA > Orchestre 26
  AB > Orchestre 27
  BB > Orchestre 28
  CB > Orchestre 29
  DB > Orchestre 30
  EB > Orchestre 31
  FB > Orchestre 32
  */

  // Delete Buttons ---------

  getSeatDeleteButtonAA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 1')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonBA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 2')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonCA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 3')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonDA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 4')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonEA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 5')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonFA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 6')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonGA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 7')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonHA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 8')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonIA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 9')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonJA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 10')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonKA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 11')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonLA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 12')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonMA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 13')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonNA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 14')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonOA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 15')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonPA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 16')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonQA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 17')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonRA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 18')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonSA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 19')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonTA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 20')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonUA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 21')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonVA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 22')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonWA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 23')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonXA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 24')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonYA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 25')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonZA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 26')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonAB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 27')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonBB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 28')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonCB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 29')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonDB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 30')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonEB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 31')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonFB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 32')
      .limit(1))
      .snapshotChanges()
  }

  // Seats By Ids -------------

  // Balcon

  getSeatsByIdAA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 1')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdBA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 2')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdCA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 3')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdDA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 4')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdEA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 5')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdFA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 6')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdGA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 7')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdHA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 8')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdIA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 9')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdJA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 10')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdKA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 11')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdLA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 12')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  // Orchestre

  getSeatsByIdMA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 13')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdNA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 14')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdOA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 15')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdPA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 16')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdQA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 17')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdRA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 18')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdSA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 19')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdTA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 20')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdUA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 21')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdVA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 22')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdWA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 23')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdXA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 24')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdYA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 25')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdZA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 26')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdAB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 27')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdBB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 28')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdCB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 29')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdDB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 30')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdEB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 31')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }

  getSeatsByIdFB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Orchestre 32')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc')
      .limit(1))
      .snapshotChanges()
  }
}