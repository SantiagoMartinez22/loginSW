import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/loginRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  public get email() {
    return this.loginForm.controls['email'];
  }

  public get password() {
    return this.loginForm.controls['password'];
  }

  public login() {
    if(this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: userData => {
          console.log(userData);
          
        },
        error: errorData => {

        },
        complete: () => {

        }
      });

      this.router.navigateByUrl('/dashboard');

      this.loginForm.reset();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
