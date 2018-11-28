import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    ) { }

  private credentialsForm: FormGroup;

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['something@mail.com'],
      password: ['sexyAnd@securePass12'],
    });
  }

  submitLoginForm() {
    this.authService.login(
      this.credentialsForm.value['email'],
      this.credentialsForm.value['password'],
      );
  }

  submitRegisterForm() {
    this.authService.register(
      this.credentialsForm.value['email'],
      this.credentialsForm.value['password'],
      );
  }
}
