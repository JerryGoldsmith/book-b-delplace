import { PreloadingStrategy, Route } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { mergeMap, switchMap } from 'rxjs/operators'
import { delay } from 'rxjs-compat/operator/delay';

// import { AngularFireAuth } from "@angular/fire/auth";
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

@Injectable()

export class AuthPreloadStrategy implements PreloadingStrategy {

    // constructor(
    //     private auth: AuthService,
    //     private authGuard : AuthGuardService
    // ) {}

    // preload(route: Route, load: Function): Observable<any> {
        
    //     const loadRoute = (delay: any) => delay
    //         ? timer(150).pipe(mergeMap(_ => load()))
    //         : load();
        
    //         console.log("Loading now "+ delay);
    //     return route.data && route.data.preload 
    //         ? loadRoute(route.data.delay)
    //         : of(null);
    //   }

    preload(route: Route, loadMe: () => Observable<any>): Observable<any> {
    
        if (route.data && route.data['preload']) {

          var delay:number=route.data['delay']

          console.log('Préchargement de '+ route.path +' dans un délai de '+ delay);
          
          return timer(delay).pipe(
            mergeMap( _ => { 
              console.log("Chargement de "+ route.path);
              return loadMe() ;
            }));

        } else {
          console.log('Pas de préchargement pour la route : '+ route.path);
          return of(null);
        }
    }

    // preload(route: Route, load: () => Observable<any>): Observable<any> { 
        
    //     // console.log(route.data?.preload ? load() : of(null));
    //     return route.data?.preload ? load() : of(null); 
    // }

    // preload(route: Route, fn: () => Observable<any>): Observable<any> {

    //     // return this.auth.signInUser('email', 'password').pipe(
    //     //     switchMap: isUserLoggedIn => isUserLoggedIn ? fn() : of(null);
    //     // );

    //     // return new Observable (observer => {
    //     //     this.auth.signInUser('email', 'password')
    //     //         .catch(_err => {
    //     //             ('An Error Has Occured While Creating Fund Details');
    //     //          })
    //     // });
    // }
    
}