import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login(credentials: LoginRequest) {
    console.log(credentials);
    
  }
}
