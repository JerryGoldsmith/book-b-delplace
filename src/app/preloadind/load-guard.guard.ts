import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
// import { AuthGuardService } from '../services/auth-guard.service';

@Injectable({
    providedIn: 'root'
})

export class LoadGuardGuard implements CanLoad {

    constructor(
        private router: Router
    ) {}

    canLoad(route: Route): boolean {
    
        let url: string = route.path;
        console.log('Url:'+ url);
        if (url=='resto-home') {
          alert('You are not authorised to visit this page');
          return false;
        }  
        return true; 
      }

}
