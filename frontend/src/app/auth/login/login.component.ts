import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginForm: FormGroup = this.formBuilder.group({
    email: ['alejo@gmail.com', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  public get email() {
    return this.loginForm.controls['email'];
  }

  public get password() {
    return this.loginForm.controls['password'];
  }

  public login() {
    if(this.loginForm.valid) {
      this.router.navigateByUrl('/dashboard');
      this.loginForm.reset();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
