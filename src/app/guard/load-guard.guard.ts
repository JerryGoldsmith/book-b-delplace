import { Injectable } from '@angular/core';
import { canActivate } from '@angular/fire/auth-guard';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
// import { AuthGuardService } from '../services/auth-guard.service';

@Injectable({
    providedIn: 'root'
})

export class LoadGuardGuard implements CanLoad {

    constructor(
        private auth: AuthService,
        // private auth: AuthGuardService,
        private router: Router
    ) {}

    canLoad(
        route: Route, 
        segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // return this.auth.signInUser();
        return false;
        // .pipe(map (signInUser) => signInUser || this.router.createUrlTree(['']));
    }

}

function email(email: any): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Function not implemented.');
}
