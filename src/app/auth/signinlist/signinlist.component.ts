import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthGuardService } from '../../services/auth-guard.service';
import { Router } from '@angular/router';
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
    private authService: AuthService,
    private authGuardService: AuthGuardService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

}
