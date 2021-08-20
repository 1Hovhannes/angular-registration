// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss'],
// })
// export class RegisterComponent implements OnInit {
//   form!: FormGroup;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.form = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', Validators.required],
//       pass: ['', Validators.required],
//       confirmPass: ['', Validators.required],
//     });
//   }

//   submit() {
//     console.log(this.form.value);
//     this.form.reset();
//   }
// }

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      ConfirmPass: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  email() {
    return this.formRegister.get('email') as FormControl;
  }

  username() {
    return this.formRegister.get('username') as FormControl;
  }
  password() {
    return this.formRegister.get('password') as FormControl;
  }
  ConfirmPass() {
    return this.formRegister.get('ConfirmPass') as FormControl;
  }

  onSubmit() {
    console.log('Submited!', this.formRegister.value);
    this.formRegister.reset();
  }
}
