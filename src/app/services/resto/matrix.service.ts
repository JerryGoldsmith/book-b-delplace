import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import * as firebase from 'firebase/app';
import "firebase/database";

@Injectable({
  providedIn: "root"
})

export class MatrixService {

  // MATRIX -------

  matrixSubject = new Subject<any[]>();
  private matrixs = [ // json disponible pour initialisation
    // {
    //   items: {
    //     a: {
    //       id: 1,
    //       name: "Saumon Roll Cheese",
    //       description: "6 pièces",
    //       price: 8.00
    //     },
    //     b: {
    //       id: 2,
    //       name: "Yakitoris",
    //       description: "4 brochettes de boeuf au fromage, servi avec 1 soupe miso, 1 salade de chou et 1 riz",
    //       price: 11.50
    //     },
    //     c: {
    //       id: 3,
    //       name: "Gyoza Poulet",
    //       description: "6 pièces",
    //       price: 7.50
    //     },
    //     d: {
    //       id: 4,
    //       name: "Hoop Tacos M",
    //       description: "1 viande au choix, Sauces aux choix, frites. Et notre sauce fromagère unique comprise.",
    //       price: 6.00
    //     },
    //     e: {
    //       id: 5,
    //       name: "Hoop Tacos XL",
    //       description: "3 viandes au choix, frites et sauce fromagère",
    //       price: 12.00
    //     },
    //     f: {
    //       id: 6,
    //       name: "Alpin",
    //       description: "Cordon bleu, raclette, lardons, frites et sauce fromagère. Taille au choix: M, L ou XL",
    //       price: 9.50
    //     },
    //     g: {
    //       id: 7,
    //       name: "Western BBQ Double",
    //       description: "Bun brioché au sésame, viande hachée de bœuf fraîche, cheddar, poitrine fumée, oignons rissolés, salade et sauce barbecue.",
    //       price: 15.95
    //     },
    //     h: {
    //       id: 8,
    //       name: "Supplément Frites M",
    //       description: "Frites M",
    //       price: 3.50
    //     },
    //     i: {
    //       id: 9,
    //       name: "Supplément Frites XL",
    //       description: "Frites XL",
    //       price: 4.50
    //     },
    //     j: {
    //       id: 10,
    //       name: "Pizza Speciale Pizzaiolo",
    //       description: "Sauce tomate, mozzarella râpée, jambon, œuf, crème, ciboulette",
    //       price: 11.50
    //     },
    //     k: {
    //       id: 11,
    //       name: "Pizza Chèvre et Miel",
    //       description: "Crème et miel, mozzarella râpée, fromage de chèvre, speck IGP (jambon fumé), roquette",
    //       price: 14
    //     },
    //     l: {
    //       id: 12,
    //       name: "Pizza Regina",
    //       description: "Sauce tomate, mozzarella râpée, jambon, champignons, olives noires",
    //       price: 10.50
    //     }
    //   },
    //   adress: {
    //     one: {
    //       name: "Shushi World",
    //       startdate: 1969,
    //       zip: "2 rue des restos - 7500 PARIS"
    //     },
    //     two: {
    //       name: "Shushi Bar",
    //       startdate: 2019,
    //       zip: "4 rue des restos - 7500 PARIS"
    //     },
    //     three: {
    //       name: "Hoop Tacos",
    //       startdate: 2012,
    //       zip: "6 rue des restos - 7500 PARIS"
    //     },
    //     four: {
    //       name: "Pasta Pizza",
    //       startdate: 2016,
    //       zip: "12 rue des restos - 7500 PARIS"
    //     }
    //   }
    // }
  ];

  emitMatrixSubject() { // emit comme envoi des données (observables)
    this.matrixSubject.next(this.matrixs.slice()); // la methode slice() pour faire une copie du tableau appareils
  }

  saveMatrixToFirebaseinServer() { // Acces vers Firebase
    this.httpClient
    .put('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/matrixs.json', this.matrixs)
    // put plutôt que post : s'il existe déjà sur firebase, put va l'écraser
    .subscribe( // réagit à la réponse du serveur
      () => {
        // console.log('Enregistrement terminé : saveMatrixToFirebase');
      },
      (error) => {
        // console.log('Erreur de sauvegarde !' + error);
      }
    );
  }

  saveMatrixFromFirebaseinServer() { // Acces depuis Firebase
    this.httpClient
    .get<any[]>('https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app/matrixs.json')
    // get pour récupérer les données depuis firebase
    .subscribe( // réagit à la réponse du serveur
      (response) => {
        // console.log('Chargement terminé : saveMatrixFromFirebase');
        this.matrixs = response;
        this.emitMatrixSubject();
      },
      (error) => {
        // console.log('Erreur de chargement !' + error);
      }
    );
  }

  // ---------------------------------------------

  constructor(
    private httpClient: HttpClient 
    ) {}

}
