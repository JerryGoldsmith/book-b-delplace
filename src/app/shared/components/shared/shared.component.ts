import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    $(window).on('hashchange', function() {
      location.hash = "noBack";
    });
  }

}
