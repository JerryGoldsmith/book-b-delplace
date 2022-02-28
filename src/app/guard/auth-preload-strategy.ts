import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { switchMap } from 'rxjs/operators';


export class AuthPreloadStrategy implements PreloadingStrategy {

    constructor(
        private auth: AuthService,
        private authGuard : AuthGuardService
    ) {}

    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        // return this.auth;
        throw new Error('Method not implemented.');
    }
    
}