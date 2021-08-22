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
  warning: boolean = false;

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
    if (this.formRegister.valid) {
      this.warning = false;
      console.log('Submited!', this.formRegister.value);
    } else {
      this.warning = true;
      console.log('Please fill in the fields correctly');
    }
    this.formRegister.reset();
  }
}
