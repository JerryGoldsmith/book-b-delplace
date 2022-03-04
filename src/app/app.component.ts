import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

/* nav auth */
// import "firebase/auth";
// import "firebase/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'book-b-delplace';

  // constructor() {
  //   var config = {
  //     apiKey: "AIzaSyDYYd6buSDkH-nyC4p44C4zEcO3U98MW_I",
  //   authDomain: "book-b-delplace.firebaseapp.com",
  //   databaseURL: "https://book-b-delplace-default-rtdb.europe-west1.firebasedatabase.app",
  //   projectId: "book-b-delplace",
  //   storageBucket: "book-b-delplace.appspot.com",
  //   messagingSenderId: "899638072854",
  //   appId: "1:899638072854:web:ffc5733f4d4c1c105c8737",
  //   measurementId: "G-XNB1L1KG5H"
  //   }
  //   firebase.initializeApp(config)
  // }

  ngOnInit(): void {

    // $(document).ready(() => {
    //   console.log('The document ready!');
    // });
  }
}
