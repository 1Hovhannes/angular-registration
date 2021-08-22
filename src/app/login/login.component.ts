import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  warning: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  userName() {
    return this.formLogin.get('userName') as FormControl;
  }
  password() {
    return this.formLogin.get('password') as FormControl;
  }

  onSubmit() {
    if (this.formLogin.valid) {
      this.warning = false;
      console.log('Submited!', this.formLogin.value);
    } else {
      // this.formLogin.markAllAsTouched();
      this.warning = true;
      console.log('Please fill in the fields correctly');
    }
    this.formLogin.reset();
  }
}
