import { Component, OnInit } from '@angular/core';
// import custom validator to validate that password and confirm password fields match
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-signinlist',
  templateUrl: './signinlist.component.html',
  styleUrls: ['./signinlist.component.scss']
})
export class SigninlistComponent implements OnInit {

  width: 0;
  height: 0;

  isAuth: boolean;

  onResized(event: ResizedEvent) {
    //@ts-ignore
    this.width = event.newWidth;
    //@ts-ignore
    this.height = event.newHeight;
  }

  constructor(
      ) { }

  ngOnInit(): void {

  }

}
