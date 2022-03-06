import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import "firebase/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from '../services/auth.service';
import { CanActivate } from '@angular/router'
import { NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private AFAuth: AngularFireAuth,
    private ngZone:NgZone
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if(user) {
              resolve(true);
            } else {
              
              // this.router.navigate(['auth', 'signin']);

              // ---- supprime erreur : Navigation triggered outside Angular zone, did you forget to call ‘ngZone.run()’?
              this.ngZone.run(() => {
                this.router.navigate (['auth', 'signin']);
              }); // -------
              resolve(false);

            }
          }
        );
      }
    );
  }
}
