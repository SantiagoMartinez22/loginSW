import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public isLogin: WritableSignal<boolean> = signal<boolean>(false);

  public mobileMenuVisible: WritableSignal<boolean> = signal<boolean>(false);

  public setIsLogin(value: boolean): void {
        this.isLogin.set(value);
    }

    public setMobileMenuVisible(value: boolean): void {
        this.mobileMenuVisible.set(value);
    }
}
