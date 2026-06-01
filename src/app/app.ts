import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Logo } from './components/shared/logo/logo';
import { Tab } from "./components/shared/tab/tab";
import { Button } from './components/shared/button/button';
import { Dialog } from './components/shared/dialog/dialog';
import { Toast } from './components/shared/toast/toast';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Logo, Tab, Button, Dialog, Toast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private authService = inject(AuthService);
  private router = inject(Router);
  protected readonly title = signal('flashcard-app');
  protected readonly isAuthenticated = computed(() => !!this.authService.token());

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
