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
    // private httpClient: HttpClient,
    private firestore: AngularFirestore,
    private router: Router,
    private AFAuth: AngularFireAuth,
    private ngZone:NgZone
    // private authService: AuthService
  ) { }

  userLogin() {
    this.AFAuth.grantOfflineAccess().then(
        (response) => {
            // this will throe the warning "did you forget to call 'ngZone.run()"
            this.navigateTo('/');
            // but this will work fine
            this.ngZone.run(()=>this.navigateTo('/'));
        },
        (error) => {
             console.log(error);
        });
    }

    navigateTo(url: string) {
       this.router.navigate(['auth', 'signin']);
   }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if(user) {
              resolve(true);
            } else {
              this.router.navigate(['auth', 'signin']);
              // this.userLogin();
              resolve(false);

            }
          }
        );
      }
    );
  }
}
