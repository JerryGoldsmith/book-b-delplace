import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
// import { Subject } from 'rxjs/Subject';
import { Subject } from 'rxjs';
// import * as firebase from 'firebase';
import firebase from "firebase/app";
import "firebase/database";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  users: User[] = [];
  userSubject = new Subject<User[]>();

  constructor(
    private httpClient: HttpClient
  ) { }

  emitUsers() {
    this.userSubject.next(this.users);
  }

  getUsers() {
    firebase.database().ref('/users')
    .on('value', (data) => {
      this.users = data.val() ? data.val() : [];
      this.emitUsers();
    });
  }

  createNewUserPushInFirebase(newUser: User) {
    this.users.push(newUser);
    // this.saveUsersToServer();
    this.saveUsers();
    this.emitUsers();
  }

  // saveUsersToServer() {
  //   this.httpClient
  //     .post('https://portfolio-bd.firebaseio.com/users.json', this.users)
  //     .subscribe(
  //       () => {
  //         console.log('Enregistrement terminé !');
  //       },
  //       (error) => {
  //         console.log('Erreur ! : ' + error);
  //       }
  //     );
  // }

  saveUsers() {
    firebase.database().ref('/users').push(this.users);
  }

  // centraliser les 3 méthodes qui seront nécessaires à l'authentification :

  createNewUser(email: string, password: string) { // asynchrone
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
    // return new Promise(
    //   (resolve, reject) => {
    //     firebase.database().ref('/users').set(this.users).then(
    //       () => {
    //         resolve();
    //       },
    //       (error) => {
    //         reject(error);
    //       }
    //     );
    //   }
    // );
  }

  signInUser(email: string, password: string) { // asynchrone
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() { // pas besoin d'asynchronicité
    firebase.auth().signOut();
  }

}
