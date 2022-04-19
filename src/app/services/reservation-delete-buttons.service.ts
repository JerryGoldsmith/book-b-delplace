import { Injectable } from "@angular/core";
import "firebase/database";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: "root"
  })

export class ReservationDeleteButtonsService {

    constructor(
        private afs: AngularFirestore
      ) {}

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
      .where ('seatOneOrder', 'array-contains', 'Balcon 13')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonNA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 14')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonOA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 15')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonPA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 16')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonQA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 17')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonRA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 18')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonSA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 19')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonTA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 20')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonUA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 21')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonVA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 22')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonWA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 23')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonXA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 24')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonYA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 25')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonZA() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 26')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonAB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 27')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonBB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 28')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonCB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 29')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonDB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 30')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonEB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 31')
      .limit(1))
      .snapshotChanges()
  }

  getSeatDeleteButtonFB() {
    return this.afs
      .collection("seatOneOrders", ref => ref
      .where ('seatOneOrder', 'array-contains', 'Balcon 32')
      .limit(1))
      .snapshotChanges()
  }
}