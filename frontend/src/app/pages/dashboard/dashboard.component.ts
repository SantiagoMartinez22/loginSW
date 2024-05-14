import { Component, OnDestroy, OnInit, WritableSignal, signal } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { User } from '../../services/auth/user';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {
  public isLogin: WritableSignal<boolean> = signal<boolean>(false);

  public userData: WritableSignal<User> = signal<User>({ id: 0, email: '' });

  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.isLogin.set(userLoginOn);
      }
    });

    this.loginService.currentUserData.subscribe({
      next: (userData) => {
        this.userData.set(userData);
      }
    })
  }

  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe(); 
    this.loginService.currentUserData.unsubscribe();
  }
}
