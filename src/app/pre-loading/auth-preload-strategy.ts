import { PreloadingStrategy, Route } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators'

@Injectable()

export class AuthPreloadStrategy implements PreloadingStrategy {

    preload(route: Route, loadMe: () => Observable<any>): Observable<any> {
    
        if (route.data && route.data['preload']) {

          var delay:number=route.data['delay']

          // console.log('Préchargement de '+ route.path +' dans un délai de '+ delay);
          
          return timer(delay).pipe(
            mergeMap( _ => { 
              // console.log("Chargement de "+ route.path);
              return loadMe() ;
            }));

        } else {
          // console.log('Pas de préchargement pour la route : '+ route.path);
          return of(null);
        }
    }
    
}