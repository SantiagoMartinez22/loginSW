import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({ id: 0, email: '' });

  constructor(
    private http: HttpClient
  ) { }

  public login(credentials: LoginRequest): Observable<User> {
    return this.http.get<User>('././assets/data.json').pipe(
      tap(userData => {
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
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

  public get userData(): Observable<User> {
    return this.currentUserData.asObservable();
  }

  public get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }
}
