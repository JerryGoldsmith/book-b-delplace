import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'book-b-delplace';

  ngOnInit(): void {

    // $(document).ready(() => {
    //   console.log('The document ready!');
    // });
  }
}
