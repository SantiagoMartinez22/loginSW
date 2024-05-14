import { Component, OnDestroy, OnInit, WritableSignal, signal } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isLogin: WritableSignal<boolean> = signal<boolean>(false);

  public mobileMenuVisible: WritableSignal<boolean> = signal<boolean>(false);

constructor(
  private loginService: LoginService
) {}

  public setIsLogin(value: boolean): void {
        this.isLogin.set(value);
    }

    public setMobileMenuVisible(value: boolean): void {
        this.mobileMenuVisible.set(value);
    }

    ngOnInit(): void {
      this.loginService.currentUserLoginOn.subscribe({
        next: (userLoginOn) => {
          this.isLogin.set(userLoginOn);
        }
      })
    }
  
    ngOnDestroy(): void {
      this.loginService.currentUserLoginOn.unsubscribe(); 
      this.loginService.currentUserData.unsubscribe();
    }
}
