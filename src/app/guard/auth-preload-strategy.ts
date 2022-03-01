import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthGuardService } from '../services/auth-guard.service';


export class AuthPreloadStrategy implements PreloadingStrategy {

    constructor(
        private auth: AuthService
        // private authGuard : AuthGuardService
    ) {}

    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        return new Observable (observer => {
            this.auth.signInUser('email', 'password')
                .catch(_err => {
                    ('An Error Has Occured While Creating Fund Details');
                 })
        });
    }
    
}