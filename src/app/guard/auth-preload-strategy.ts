import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { switchMap } from 'rxjs/operators'


export class AuthPreloadStrategy implements PreloadingStrategy {

    constructor(
        private auth: AuthService,
        private authGuard : AuthGuardService
    ) {}

    preload(route: Route, load: () => Observable<any>): Observable<any> { 
        
        console.log(route.data?.preload ? load() : of(null));
        return route.data?.preload ? load() : of(null); 
    }

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