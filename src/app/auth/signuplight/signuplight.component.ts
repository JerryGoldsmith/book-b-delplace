import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthGuardService } from '../../services/auth-guard.service';
import { Router } from '@angular/router';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../helpers/must-match.validator';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signuplight',
  templateUrl: './signuplight.component.html',
  styleUrls: ['./signuplight.component.scss']
})
export class SignupLightComponent implements OnInit {

  signUpForm: FormGroup;
  errorMessage: string;
  submitted = false;

  isAuth: boolean;

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
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['',
        [Validators.required, Validators.pattern(/[0-9a-zA-g5-d7-Z]{10,}/)]
        /* pattern > modèle (au moins 6 caractères, règles firebase :
        plus il y en a, plus on exige un mot de passe complexe) */
        ],
        confirmPassword: ['',
        [Validators.required]
        ],
        lastname: ['', [Validators.minLength(2), Validators.maxLength(15)]],
        firstname: ['', [Validators.minLength(2), Validators.maxLength(15)]],
        firm: [''],
        genre: [''],
        country: [''],
        address: [''],
        // addressMore: ['', [Validators.required]],
        birthDate: ['',
        [Validators.pattern(/[0-9a/zA/g5-Z]{8,}/)]
        ],
        zipCode: ['',
        [Validators.pattern(/[0-9a-g-Z]{5,}/)]
        ],
        city: [''],
        phoneNumber: ['',
        [Validators.pattern(/[0-9a-zA-g5-Z]{8,}/)]
        ],
        smartphoneNumber: ['',
        [Validators.pattern(/[0-9a-zA-g5-Z]{8,}/)]
        ]
      }, {
            validator: MustMatch('password', 'confirmPassword')
      });
  }

  onSubmit() {
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    const confirmPassword = this.signUpForm.get('confirmPassword').value;
    const firstname = this.signUpForm.get('firstname').value;
    const lastname = this.signUpForm.get('lastname').value;
    const firm = this.signUpForm.get('firm').value;
    const genre = this.signUpForm.get('genre').value;
    const country = this.signUpForm.get('country').value;
    const address = this.signUpForm.get('address').value;
    const birthDate = this.signUpForm.get('birthDate').value;
    const zipCode = this.signUpForm.get('zipCode').value;
    const city = this.signUpForm.get('city').value;
    const phoneNumber = this.signUpForm.get('phoneNumber').value;
    const smartphoneNumber = this.signUpForm.get('smartphoneNumber').value;
    // const acceptTerms = this.signUpForm.get('acceptTerms').value;

    const newUser = new User(
      email,
      password,
      confirmPassword,
      firstname,
      lastname,
      firm,
      genre,
      country,
      address,
      birthDate,
      zipCode,
      city,
      phoneNumber,
      smartphoneNumber
      // acceptTerms
    );

    this.authService.createNewUserPushInFirebase(newUser);

    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/users']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  onReset() {
        this.submitted = false;
        this.signUpForm.reset();
  }

}
