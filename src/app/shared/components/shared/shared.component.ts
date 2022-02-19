import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  // @Input() name: string;

  constructor() { }

  ngOnInit(): void {
    $(window).on('hashchange', function() {
      location.hash = "noBack";
    });
  }

}
