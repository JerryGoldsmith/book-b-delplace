import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase';
// import firebase from "firebase/app";
import * as firebase from 'firebase/app';
import "firebase/database";
// import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    // private httpClient: HttpClient,
    // private firestore: AngularFirestore,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if(user) {
              resolve(true);
            } else {
              this.router.navigate(['auth', 'signin']);
              resolve(false);
            }
          }
        );
      }
    );
  }
}
