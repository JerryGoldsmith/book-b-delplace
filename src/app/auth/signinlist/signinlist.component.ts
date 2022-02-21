import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthGuardService } from '../../services/auth-guard.service';
import { Router } from '@angular/router';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../helpers/must-match.validator';
import { User } from '../../models/user.model';
import { ResizedEvent } from 'angular-resize-event';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-signinlist',
  templateUrl: './signinlist.component.html',
  styleUrls: ['./signinlist.component.scss']
})
export class SigninlistComponent implements OnInit {

  width: 0;
  height: 0;

  onResized(event: ResizedEvent) {
    // this.width = event.newWidth;
    // this.height = event.newHeight;
  }

  constructor(
    private authService: AuthService,
    private authGuardService: AuthGuardService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

}
