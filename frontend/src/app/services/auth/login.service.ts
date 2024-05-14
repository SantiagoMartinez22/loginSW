import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  public login(credentials: LoginRequest): Observable<User> {
    return this.http.get<User>('././assets/data.json').pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status === 0) {
      console.error('Error', error.error);
      
    } else {
      console.error('Backend error', error.status, error.error)
    }

    return throwError(() => new Error('Something went wrong'));
  }
}
