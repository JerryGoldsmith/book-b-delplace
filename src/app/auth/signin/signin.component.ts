import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthGuardService } from '../../services/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;
  submitted = false;


  // onActivate(event) {
  //   // window.scroll(0,0);
  //   document.body.scrollTop = 0;
  //   // document.querySelector('body').scrollTo(0,0)
  // }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private authGuardService: AuthGuardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['',
        [Validators.required, Validators.pattern(/[0-9a-zA-g5-d7-Z]{10,}/)]
        /* pattern > modèle (au moins 6 caractères, règles firebase :
        plus il y en a, plus on exige un mot de passe complexe) */
        ]
      }
    );
  }

  // convenience getter for easy access to form fields
   // get f() { return this.signInForm.controls; }

  onSubmit() {
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;

    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/auth/signinlist']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );

    this.submitted = true;
    // stop here if form is invalid
    if (this.signInForm.invalid) {
        return;
    }

    // display form values on success
    // alert('Tout est parfait !\n\n' + JSON.stringify(this.signUpForm.value, null, 4));
  }

  // onReset() {
  //   this.submitted = false;
  //   this.signUpForm.reset();
  // }

}
