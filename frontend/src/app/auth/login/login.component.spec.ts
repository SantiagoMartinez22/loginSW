import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginService } from '../../services/auth/login.service';

describe('LoginComponent', () => {
  let loginComponent: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, HttpClientTestingModule],
      providers: [FormBuilder, Router, LoginService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    loginComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(loginComponent).toBeTruthy();
  });

  it('should login', () => {
    expect(loginComponent.login()).toBeUndefined();
  });
});
