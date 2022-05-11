import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../helpers/must-match.validator';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup-fs',
  templateUrl: './signup-fs.component.html',
  styleUrls: ['./signup-fs.component.scss']
})
export class SignupFsComponent implements OnInit {

  signUpForm: FormGroup;
  errorMessage: string;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  user = [];

  addUser = (user: string) => this.user.push(user);

  removeUser = (user: string) => {
    let index = this.user.indexOf(user);
    if (index > -1) this.user.splice(index, 1);
  };

  initForm() {
    this.signUpForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['',
        [Validators.required, Validators.pattern(/[0-9a-zA-g5-d7-Z]{10,}/)]
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
    );
  }

  onReset() {
        this.submitted = false;
        this.signUpForm.reset();
  }

}
